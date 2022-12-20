import ShowCard from "./ShowCard"
import "./ShowCard.css"
import { useState } from "react"


const CpaccList = ({cpacc, setCpacc}) => {
  return (
    <div>
      <ShowCard cpacc={cpacc} setCpacc={setCpacc}/> 
    </div>
    )
}

export default CpaccList