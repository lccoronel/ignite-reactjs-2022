import { createContext, useState } from 'react'
import * as zod from 'zod'
import { HandPalm, Play } from 'phosphor-react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import { Contdown } from './components/Countdown'
import { NewCyclesForm } from './components/NewCyclesForm'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CycleContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished(): void
  setSecondsPassed(seconds: number): void
}

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod.number().min(1).max(60),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

export const CycleContext = createContext({} as CycleContextType)

export function Home() {
  const newCycleForm = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: { task: '', minutesAmount: 0 },
  })
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { handleSubmit, watch, reset } = newCycleForm
  const isDisabledSubmit = !watch('task')
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )
  }

  function handleCreateNewCyCle({ task, minutesAmount }: NewCycleFormData) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = { id, task, minutesAmount, startDate: new Date() }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
    reset()
  }

  function handleInterruptCycle() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        } else {
          return cycle
        }
      }),
    )

    setActiveCycleId(null)
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCyCle)}>
        <CycleContext.Provider
          value={{
            activeCycle,
            activeCycleId,
            amountSecondsPassed,
            setSecondsPassed,
            markCurrentCycleAsFinished,
          }}
        >
          <FormProvider {...newCycleForm}>
            <NewCyclesForm />
          </FormProvider>
          <Contdown />
        </CycleContext.Provider>

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={handleInterruptCycle}>
            <HandPalm size={24} />
            interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isDisabledSubmit} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
