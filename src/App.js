import React,{useState} from 'react';
import './App.css';

function App() {

  const [result ,setResult]=useState("")

  const handleclick=(e)=>{
    console.log("running")
    setResult (result.concat(e.target.name));


  }


  const Clear=()=>{
    setResult("")
  }

  const calculate =()=>{
    try {
      setResult(eval(result).toString());

    }  catch(err){
      setResult("error")
    }

  }

  const backspace=()=>{
    setResult(result.slice(0,result.length -1))
  }
  return (
    <>
      <div>
             <h2  className=" text-center ">Calculater App</h2>
             </div>
 

    <div  className="container">

          <form >

         <input type="text" value={result} />

         </form>
         <br />
         <div  className="keypad">
           
         <button onClick={Clear} id="clear" className=" highligght  btn-danger">Clear</button >
         <button name="c" onClick={backspace} id="backspace" className=" highligght  btn-danger">C</button >

         <button name="/" onClick={handleclick} className=" highligght  btn-danger">/</button >

          <button name="0" onClick={handleclick} className="  btn-danger">0</button >
          <button name="1" onClick={handleclick} className="  btn-danger">1</button >
          <button name="2" onClick={handleclick} className=" btn-danger">2</button >
          <button name="3" onClick={handleclick} className=" highligght  btn-danger">3</button >
          <button name="4" onClick={handleclick} className= "   btn-danger">4</button >

          <button name="5"onClick={handleclick} className="   btn-danger">5</button >
          <button name="6" onClick={handleclick} className="  btn-danger">6</button >
          <button name="7" onClick={handleclick} className=" highligght   btn-danger">7</button >
          <button name="8" onClick={handleclick} className="  btn-danger">8</button >
          <button name="9" onClick={handleclick} className="  btn-danger">9</button >
          <button name="."onClick={handleclick} className="  btn-danger">.</button >

  
          <button name="+"onClick={handleclick} className=" highligght  btn-danger">+</button >
          <button name="-" onClick={handleclick} className="  btn-danger">-</button >
          <button name="*" onClick={handleclick} className="  btn-danger">*</button >
          <button name="=" onClick={calculate} id="result" className=" highligght  btn-danger">=</button >

          </div>
    </div>

    </>
    );
}

export default App;
