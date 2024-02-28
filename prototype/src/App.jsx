import { useState } from "react";
import "./App.css";

function App() {
  // src for tts:  https://dev.to/shantanu_jana/text-to-speech-converter-with-javascript-30oo

  const [text, setText] = useState("");

  const handleInputChange = (e) => {
    setText(e.target.value);
    console.log(e.target.value); // for debugging
  };

  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };

  return (
    <>
      <h1>Text to Speech</h1>

      <div id="text-to-speech">
        <textarea id="text" onChange={handleInputChange}></textarea>
        <button id="speak-button" onClick={speak}>
          Speak
        </button>
      </div>
    </>
  );
}

export default App;
