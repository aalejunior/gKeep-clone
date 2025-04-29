import React from "react"

const Card = ({ card, removeCard }) => {
  return (
    <div className="card-element text-gray position-relative col-12 col-lg-3 light-border rounded-3">
      <button className="btn-remove" onClick={() => removeCard(card.id)}>
        ×
      </button>
      <h4 className="card-title text-light ps-3">{card.title}</h4>
      <p className="card-description ps-3">{card.description}</p>
    </div>
  )
}

export default Card
