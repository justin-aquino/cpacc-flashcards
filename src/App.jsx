import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Navbar, Nav, NavDropdown, Offcanvas} from "react-bootstrap"
import { useState } from 'react';
import cpaccFlashCards from "./utils/cards-api-v1"
import CpaccList from './Components/CpaccList';
import { Routes, Route } from 'react-router';
import Home from './Components/Home';

function App() {

  const [cpacc, setCpacc] = useState(cpaccFlashCards)


  return (
    <>
    <div className="App ">
      <main>
      <Navbar bg="dark" variant="dark">
        <div className='m-auto'>
            <Nav>
              <Navbar.Brand className='a11y-nav text-white m-2' href="/">A11y Cards</Navbar.Brand>
              <Nav.Link href="https://www.dhs.gov/trusted-tester" className='text-white m-2'>Trusted Tester</Nav.Link>
              <Nav.Link href="https://www.w3.org/WAI/WCAG21/quickref/" className='text-white m-2'>WCAG Quick Ref</Nav.Link>
              <NavDropdown    
                id="collasible-nav-dropdown" 
                className='m-2'
                title={
                        <span className="text-white my-auto ">
                          Flashcards
                        </span>
                      } 
              >       
              <NavDropdown.Item href="/" >CPACC Cards</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Trusted Tester
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Coming Soon</NavDropdown.Item>
             
            </NavDropdown>
            </Nav>
        </div>

      </Navbar>
        
        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
          <Route path="/" element={<CpaccList cpacc={cpacc} setCpacc={setCpacc} />} />

        </Routes>
        
      </main>
    </div>
    </>
  );
}

export default App;
