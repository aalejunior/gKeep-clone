import { useState, useEffect } from "react"
import "./App.css"
import Card from "./components/Card"
import CardForm from "./components/CardForm"

function App() {
  const [cards, setCards] = useState(() => {
    const storedCards = localStorage.getItem("cards")
    return storedCards ? JSON.parse(storedCards) : []
  })

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards))
  }, [cards])

  const addCard = (title, description) => {
    const newCard = { id: Date.now(), title, description }
    setCards([...cards, newCard])
  }

  const removeCard = id => {
    const newCards = cards.filter(card => card.id !== id)
    setCards(newCards)
  }

  return (
    <div className="container row justify-content-center align-items-center">
      <CardForm addCard={addCard} />
      <div className="d-flex justify-content-start align-items-center flex-wrap gap-3">
        {cards.map(card => (
          <Card key={card.id} card={card} removeCard={removeCard} />
        ))}
      </div>
    </div>
  )
}

export default App
