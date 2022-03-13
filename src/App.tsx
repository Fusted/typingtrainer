// import React, { useEffect, useState } from "react";
// import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import TypingArea from "./components/TypingArea/TypingArea";


const text: string = 'Some text'

const arrayText = text.split('')

function App() {


  return (
    <div className="App">
      <TypingArea text={arrayText}/>

      <Button>Click me</Button>
    </div>
  );
}

export default App;
