import ShowCard from "./ShowCard"
import "./ShowCard.css"
import { useState } from "react"
const CardList = ({cards, setCards}) => {

    let [showToggle, setShowToggle] = useState(false);

    const [showQuestion, setShowQuestion] = useState({
        question: "Click Button to Generate Question",
        answer: ""
    })
    



    const randomizer = () => {
       for (let i = 0; i < cards.length; i++){
           let qIndex = Math.floor(Math.random() * cards.length)
           var currentQuestion = cards[qIndex]
        }
        setShowQuestion(currentQuestion)
        setShowToggle(false)
        console.log(showQuestion)
    }

    const showAnswer = () => {
        if(showToggle === true) {
            setShowToggle(false)
        } else {
            setShowToggle(true)
        }
        console.log(showToggle)
    }

    // const mappedCards = cards.map((card, idx) => {
    //     return <ShowCard card={card} key={idx} />
    // })
  return (
    <>
        <h2>Card List</h2>
        <div className="container">
            <h3>Question:</h3>
            <p> {showQuestion.question}</p>
        </div>
        <div>
            <h3>Answer:</h3>
        {
            showToggle ? <p>{showQuestion.answer}</p> : null
        }
    </div>
        <button onClick={showAnswer}>Show Answer</button>
        <button onClick={randomizer}>Generate Question</button>
    </>
  )
}

export default CardList