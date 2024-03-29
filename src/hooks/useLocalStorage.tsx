import { useEffect, useState } from 'react'

type Item<Key extends keyof any, Value> = {
  [key in Key]: Value
}

export function useLocalStorage() {
  const [card, setCard] = useState<Item<string, number>>(() => {
    try {
      const getCard = window.localStorage.getItem('card')
      return getCard ? JSON.parse(getCard) : {}
    } catch (error) {
      return {}
    }
  })

  const setValue = (id: number) => {
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
    console.log(card)
  }, [card])
}