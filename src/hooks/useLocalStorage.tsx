import { UUID } from 'crypto'
import { useEffect, useState } from 'react'

type Item<Key extends keyof any, Value> = {
  [key in Key]: Value
}

export const useLocalStorage = () => {
  const [card, setCard] = useState(() => {
    try {
      const getCard = window.localStorage.getItem('card')
      return getCard ? JSON.parse(getCard) : {}
    } catch (error) {
      console.log('error iniciar carro')
    }
  })

  const setValue = (id: UUID) => {
    try {
      if (card[id] !== undefined) {
        card[id] = card[id] + 1
      } else {
        card[id] = 1
      }
    } catch (error) {
      console.log(error)
    }
    setCard(card)
    window.localStorage.setItem('card', JSON.stringify(card))
  }

  useEffect(() => {
    console.log('este es el card')
    console.log(card)
  }, [card])

  return { card, setValue }
}