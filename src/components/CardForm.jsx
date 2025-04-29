import { useState } from "react"

const CardForm = ({ addCard }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (!title) {
      alert("Digite uma nota")
      return
    }
    addCard(title, description)
    setTitle("")
    setDescription("")
  }

  return (
    <form onSubmit={handleSubmit} className="card-form col-12 col-lg-8 mb-4">
      <input
        type="text"
        placeholder="Criar uma nota..."
        onChange={e => setTitle(e.target.value)}
        value={title}
      />
      <button type="submit">+</button>
    </form>
  )
}

export default CardForm
