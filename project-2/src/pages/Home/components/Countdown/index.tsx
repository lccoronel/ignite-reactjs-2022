import { differenceInSeconds } from 'date-fns'
import React, { useEffect, useState } from 'react'

import { CountdownContainer, Separator } from './styles'

interface ContdownProps {
  activeCycle: any
  setCycles: any
  activeCycleId: any
}

export const Contdown: React.FC<ContdownProps> = ({
  activeCycle,
  setCycles,
  activeCycleId,
}) => {
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  useEffect(() => {
    let interval: number

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDiferrence = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )

        if (secondsDiferrence >= totalSeconds) {
          setCycles((state) =>
            state.map((cycle) => {
              if (cycle.id === activeCycleId) {
                return { ...cycle, finishedDate: new Date() }
              } else {
                return cycle
              }
            }),
          )

          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)
        } else {
          setAmountSecondsPassed(secondsDiferrence)
        }
      }, 1000)
    }

    return () => clearInterval(interval)
  }, [activeCycle, totalSeconds, activeCycleId])

  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
