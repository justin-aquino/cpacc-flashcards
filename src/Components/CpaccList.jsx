import ShowCard from "./ShowCard"
import "./ShowCard.css"
import { useState } from "react"


const CardList = ({cpacc, setCpacc}) => {
  return (
    <div>
      <ShowCard cpacc={cpacc} setCpacc={setCpacc}/> 
    </div>
    )
}

export default CardList