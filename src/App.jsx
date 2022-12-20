import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar, Nav, NavDropdown, Offcanvas} from "react-bootstrap"
import { useState } from 'react';
import cpacc from "./utils/cards-api-v1"
import CardList from './Components/CardList';

function App() {

  const [cards, setCards] = useState(cpacc)


  console.log(cards)
  return (
    <>
    <div className="App ">
      <main>
      <Navbar bg="dark" variant="dark">
        <div className='m-auto'>
            <Nav>
              <Navbar.Brand className='a11y-nav' href="#home">A11y Cards</Navbar.Brand>
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <NavDropdown title="Flashcards" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">CPACC Cards</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            </Nav>
        </div>

      </Navbar>
        <h1>A11y Flashcards</h1>
        <CardList cards={cards} setCards={setCards} />
      </main>
    </div>
    </>
  );
}

export default App;
