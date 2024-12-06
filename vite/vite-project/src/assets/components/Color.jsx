import React,{useState} from 'react'
import Buttons from './Buttons';
const Color = () => {
    const [color,setColor]=useState('black');
  return (
    <div>
 <h2 style ={{color:color}}>My name is Ananya</h2> 
 <Buttons name="red" color={color} setColor={setColor}/>
 <Buttons name="yellow" color={color} setColor={setColor}/>

    </div>
  )
}

export default Color
