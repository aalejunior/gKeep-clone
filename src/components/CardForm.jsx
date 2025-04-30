import { useState } from "react"

const CardForm = ({ addCard }) => {
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if (!description) {
      alert("Digite uma nota")
      return
    }
    addCard(title, description)
    setTitle("")
    setDescription("")
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="card-form d-flex light-border rounded-3 mb-4"
    >
      <input
        className="ms-2 flex-grow-1 no-focus-bg py-3"
        type="text"
        placeholder="Criar uma nota..."
        onChange={e => setDescription(e.target.value)}
        value={description}
      />
      <button className="bg-light m-2 px-3" type="submit">
        +
      </button>
    </form>
  )
}

export default CardForm
