import { useState } from "react"

export default function Card({ card, removeCard, updateCard }) {
  const [isEditing, setIsEditing] = useState(false)
  const [title, setTitle] = useState(card.title)
  const [description, setDescription] = useState(card.description)

  const handleSave = () => {
    updateCard(card.id, title, description)
    setIsEditing(false)
  }
  const handleCancel = () => {
    setTitle(card.title)
    setDescription(card.description)
    setIsEditing(false)
  }
  const renderEditMode = () => (
    <>
      <input
        className="editable-input w-100 mb-2"
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onFocus={e => e.target.select()}
        placeholder="Título (opcional)"
      />
      <textarea
        className="editable-input w-100 mh-100 mb-2"
        rows="4"
        value={description}
        onChange={e => setDescription(e.target.value)}
        placeholder="Escreva sua nota aqui..."
      />
      <div className="d-flex justify-content-end gap-2">
        <button className="btn btn-sm btn-save" onClick={handleSave}>
          Salvar
        </button>
        <button className="btn btn-sm btn-secondary" onClick={handleCancel}>
          Cancelar
        </button>
      </div>
    </>
  )
  const renderReadMode = () => (
    <>
      <h5 className="card-title">{card.title || "Sem título"}</h5>
      <p className="card-description pt-1">{card.description}</p>
      <button
        className="btn btn-sm btn-outline-light mt-2"
        onClick={() => setIsEditing(true)}
      >
        Editar
      </button>
    </>
  )
  return (
    <div className="card-element p-3 bg-dark text-light rounded-3 position-relative">
      <button
        className="btn-remove position-absolute"
        onClick={() => removeCard(card.id)}
      >
        ×
      </button>
      {isEditing ? renderEditMode() : renderReadMode()}
    </div>
  )
}
