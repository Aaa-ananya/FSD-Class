import { useState } from "react"
import React from 'react'

const Buttons = (props) => {
  return (
    <button onClick={()=>props.setColor(props.name)}>{props.name}</button>
  )
}

export default Buttons
