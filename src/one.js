import React, {useState} from 'react';

const One= (props) => {
const[num1,setNum1] = useState("");
const incNum1=()=> { 
    if(num1< 10){
    setNum1(num1+1);
}else{
    setNum1(10);
}}
const decNum1=()=> {
    if(num1 > 0){
    setNum1(num1-1);
}else{
    setNum1(0);
}}
return(

<div>
<button onClick={decNum1}>-</button>
<h1>{num1}</h1>
<button onClick={incNum1}>+</button>
 </div>
);
}
export default One;