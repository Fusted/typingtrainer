// import React, { useEffect, useState } from "react";
// import Card from "./components/Card/Card";
import TypingArea from "./components/TypingArea/TypingArea";


const text: string = 'Some text'

const arrayText = text.split(' ')

function App() {


  return (
    <div className="App">
      <TypingArea text={arrayText}/>
    </div>
  );
}

export default App;
