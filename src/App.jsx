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
  const updateCard = (id, newTitle, newDescription) => {
    const updatedCards = cards.map(card =>
      card.id === id
        ? { ...card, title: newTitle, description: newDescription }
        : card
    )
    setCards(updatedCards)
  }

  return (
    <div className="container-fluid p-0">
      <CardForm addCard={addCard} />
      <div className="row justify-content-start gy-3">
        {cards.map(card => (
          <div key={card.id} className="col-12 col-md-6 col-lg-4">
            <Card card={card} removeCard={removeCard} updateCard={updateCard} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
