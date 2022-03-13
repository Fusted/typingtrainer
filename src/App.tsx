// import React, { useEffect, useState } from "react";
// import Card from "./components/Card/Card";
import Button from "./components/Button/Button";
import TypingArea from "./components/TypingArea/TypingArea";
import letters from "./store/letters";

const text: string = 'some text test fuck me please hard'

const arrayText = text.split('')

function App() {

  letters.changeCurrentLetter(arrayText[0])
  letters.setCurrentLetterId(0)

  return (
    <div className="App">
      <TypingArea text={arrayText}/>

      <Button>Click me</Button>
    </div>
  );
}

export default App;
