import React, {useState} from "react";
import './App.css';

function App() {

  const [ result, setResult] = useState("");

  const clickHandle = (e) => {
    setResult(result.concat(e.target.value))
  }

  const handleDelete = (e) => {
    e.preventDefault();
    setResult("")
  }

  const calculate = (e) => {
    setResult(eval(result).toString())
  }

  return (
    <div className="calc">
      <input type="text" placeholder='0'  id="answer" value={result}/>
      <input type="button" value={"0"} className="button" onClick={clickHandle}/>
      <input type="button" value={"1"} className="button" onClick={clickHandle}/>
      <input type="button" value={"2"} className="button" onClick={clickHandle}/>
      <input type="button" value={"3"} className="button" onClick={clickHandle}/>
      <input type="button" value={"4"} className="button" onClick={clickHandle}/>
      <input type="button" value={"5"} className="button" onClick={clickHandle}/>
      <input type="button" value={"6"} className="button" onClick={clickHandle}/>
      <input type="button" value={"7"} className="button" onClick={clickHandle}/>
      <input type="button" value={"8"} className="button" onClick={clickHandle}/>
      <input type="button" value={"9"} className="button" onClick={clickHandle}/>
      <input type="button" value={"*"} className="button" onClick={clickHandle}/>
      <input type="button" value={"+"} className="button" onClick={clickHandle}/>
      <input type="button" value={"-"} className="button" onClick={clickHandle}/>
      <input type="button" value={"."} className="button" onClick={clickHandle}/>
      <input type="button" value={"/"} className="button" onClick={clickHandle}/>
      <input type="button" value={"%"} className="button" onClick={clickHandle}/>
      <input type="button" value={"DEL"} onClick={handleDelete}  className="button1"/>
      <input type="button" value={"="} onClick={calculate} className="button1"/>
   

    </div>
  );
}

export default App;
