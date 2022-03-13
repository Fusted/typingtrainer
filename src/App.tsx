import React, { useEffect } from "react";
import Service from "./services/service";
import Button from "./components/Button/Button";
import TypingArea from "./components/TypingArea/TypingArea";
import letters from "./store/letters";

const text: string = 'some text test fuck me please hard'


function getRandomInt(max: number) : number {
  return Math.floor(Math.random() * max);
}
const arrayText = text.split('')

function App() {

  useEffect(() => {
    const text = Service.getText()
    text.then(textsList => {
      const indexOfText = getRandomInt(textsList.texts.length)
      const newText = textsList.texts[indexOfText].split('')
      letters.setText(newText)
    })
  })

  letters.changeCurrentLetter(arrayText[0])
  letters.setCurrentLetterId(0)

  return (
    <div className="App">
      <TypingArea/>

      <Button>Click me</Button>
    </div>
  );
}

export default App;
