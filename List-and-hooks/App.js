import { useState } from 'react';
import MyComp from './MyComp'

 export default function App() {

  const[change, setchange]= useState(false)

  const[isVisible,setVisible]=useState(true)

  return (
    <div>

      {isVisible === true && <MyComp name={change === true ? "Mayank" : "Ahmedabad"}/>}

      <button onClick={()=>{setchange(true)}} >Click to change</button>
      <button onClick={()=>{setVisible(false)}}>Remove Component</button>
    </div>
  );
}


