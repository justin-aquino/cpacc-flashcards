import "./ShowCard.css"

const ShowCard = ({card}) => {
  return (
    <div className="sub-container">
        {card.question}
    </div>
  )
}

export default ShowCard