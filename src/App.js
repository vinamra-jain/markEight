import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😊": "smiling",
  "🥺": "pleading",
  "❤️": "Red Heart",
  "😂": "laughing",
  "😷": "face with medical mask"
};

export default function App() {
  const initialMessage = ">Meaning will appear here<";
  var keysDataBase = Object.keys(emojiDictionary);
  const [userInputMeaning, setUserInputMeaning] = useState(initialMessage);
  function findMeaning(userInput) {
    if (userInput === "") return initialMessage;

    if (userInput in emojiDictionary) {
      return emojiDictionary[userInput];
    } else {
      return "Not in our Database";
    }
  }

  function onChangeHandler(event) {
    var userInput = event.target.value;
    setUserInputMeaning(findMeaning(userInput));
  }

  function itemOnClickHandler(item) {
    setUserInputMeaning(findMeaning(item));
  }

  return (
    <div className="App">
      <h1>E-mo-G Interpreter</h1>
      <input onChange={onChangeHandler}></input>
      <div className="meaning">{userInputMeaning}</div>
      {keysDataBase.map(function (item) {
        return (
          <span
            key={item}
            style={{
              margin: "1rem",
              cursor: "pointer",
              fontSize: "1.5rem"
            }}
            onClick={() => itemOnClickHandler(item)}
          >
            {item}
          </span>
        );
      })}
    </div>
  );
}
