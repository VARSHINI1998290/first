import React,{useState} from 'react';
import One from './one';
function App () {
    const[num,setNum]=useState("");
    const[fullNum,setfullNum]=useState("");
  
const onSubmit = () => { 
    setfullNum(num);
} 
const inputEvent = (event) => {
    setNum(event.target.value);
}
    return (
        <>
            <h1>{fullNum}</h1>
<input type="num" placeholder="Input a Num.." 
onChange={inputEvent} />
<button onClick={onSubmit} >SUBMIT</button>


<One />

  </>
    );
    }
export default App;