import "./ShowCard.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from "react"


const ShowCard = ({cards, setCards}) => {
  
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
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title className="question">{showQuestion.question}</Card.Title>
        <Card.Text className="answer">
          {showQuestion.answer}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default ShowCard