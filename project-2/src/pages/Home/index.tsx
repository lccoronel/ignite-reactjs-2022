import { useEffect, useState } from 'react'
import * as zod from 'zod'
import { differenceInSeconds } from 'date-fns'
import { HandPalm, Play } from 'phosphor-react'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { NewCyclesForm } from './components/NewCyclesForm'
import { Contdown } from './components/Countdown'

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)

  const isDisabledSubmit = !watch('task')
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60
  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}: ${seconds}`
    }
  }, [minutes, seconds, activeCycle])

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
        <NewCyclesForm />
        <Contdown
          activeCycle={activeCycle}
          activeCycleId={activeCycleId}
          setCycles={setCycles}
        />

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
