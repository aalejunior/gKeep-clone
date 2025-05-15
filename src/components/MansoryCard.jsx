import Masonry from "react-masonry-css"
import Card from "./Card"
export default function CardsMasonry({ cards, removeCard, updateCard }) {
  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
  }

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry-grid gap-3"
      columnClassName="masonry-grid_column"
    >
      {cards.map(card => (
        <Card
          key={card.id}
          card={card}
          removeCard={removeCard}
          updateCard={updateCard}
        />
      ))}
    </Masonry>
  )
}
