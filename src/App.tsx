import "./App.css";
import User from "./Person";
//A DATATYPE STRING
let paldo: string = "OHAHAY!";

//A DATA TYPE NUMBER 
let age: number = 26;

//A BOOLEAN FOR TRUE OR FALSE
let isMarried: boolean = false;

//SET OF AN ARRAY
let paldos: number[] = [1,2,3,4,5];

function App() {
  return <>
    <User name={"MARK BELLO"} age={25} isMarried={false} />
  </>;
}


export default App;