import { useState } from "react";
import data from "./data"
import { Lista } from "./assets/lista";


const App = () => {
  const[lista,setLista]=useState(data)
  console.log(lista)

  
  return (
    <main>
    <div className="container">
      <h4>{lista.length} Birthdays today</h4>
      <Lista lista={lista} ></Lista>
      <button onClick={()=>setLista([])} className="btn">Clear Lista</button>       
    </div>
    </main>

    );
 
};
export default App;
