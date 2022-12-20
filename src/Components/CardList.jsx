import ShowCard from "./ShowCard"
import "./ShowCard.css"
import { useState } from "react"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

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

  return (

    <>
        <h2>CPACC Practice</h2>
        <div className="main-container bg-dark text-white " style={{ width: '40rem' } }>
            <Card className="sub-container bg-secondary" style={{ width: '35rem' } }>
                <Card.Title><h2>Question:</h2></Card.Title>
                <Card.Text> <p className="question">{showQuestion.question}</p></Card.Text>
            <Card.Body className=" text-white">
                <Card.Text className="p-0">
                {
                    showToggle ? 
                    <>
                        <h2>Answer:</h2>
                        <p className="answer">{showQuestion.answer}</p>
                    </> 
                    : null
                }
                
                </Card.Text>
                {
                    showToggle ?
                <Button className="q-btn" variant="danger" onClick={showAnswer}>Hide Answer</Button>
                :
                <Button className="q-btn" variant="danger" onClick={showAnswer}>Show Answer</Button>
                }
                {
                    showQuestion.question === "Click Button to Generate Question" ?
                    <Button className="q-btn" variant="primary" onClick={randomizer}>Generate Question</Button> 
                    :
                    <Button className="q-btn" variant="primary" onClick={randomizer}>Next Question</Button>
                }
            </Card.Body>
            </Card>
        </div>
    </>
    )
}

export default CardList