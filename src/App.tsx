import React, { useEffect } from "react";
import Service from "./services/service";
import TypingArea from "./components/TypingArea/TypingArea";
import letters from "./store/letters";
import CardList from "./components/CardList/CardList";
import './styles/reset.scss'
import './app.scss'


function getRandomInt(max: number) : number {
  return Math.floor(Math.random() * max);
}


function App() {

  useEffect(() => {
    const text = Service.getText()
    text.then(textsList => {
      const indexOfText = getRandomInt(textsList.texts.length)
      const newText = textsList.texts[indexOfText].split('')
      letters.setText(newText)
    })
  })


  return (
    <div className="App">
      <div className="container">
        <TypingArea/>
        <CardList />
      </div>
    </div>
  );
}

export default App;
