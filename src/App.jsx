import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import cpacc from "./utils/cards-api-v1"
import CardList from './Components/CardList';

function App() {

  const [cards, setCards] = useState(cpacc)


  console.log(cards)
  return (
    <div className="App ">
      <main>
        <h1>CPACC Exam Flashcards</h1>
        <CardList cards={cards} setCards={setCards} />
      </main>
    </div>
  );
}

export default App;
