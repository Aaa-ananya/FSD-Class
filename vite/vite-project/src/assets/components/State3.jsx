import React , {useState} from 'react'

const State3 = () => {
    const [total,setTotal]=useState(0);
  return (
    <div className="usestate">
    
      <button
        onClick={()=>{
            setTotal(total+1);
        }}>increase
      </button>
      <button
        onClick={()=>{
            setTotal(total-1);
        }}>decrease
      </button>
      <h2>{total}</h2>
    </div>
  
)}

export default State3;
