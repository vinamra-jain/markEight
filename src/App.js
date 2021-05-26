import "./styles.css";
import { useState } from "react";

var emojiDictionary = {
  "😊": "smiling",
  "🥺": "pleading",
  "😂": "laughing",
  "🤣": "rolling on the floor laughing",
  "😘": "blowing a kiss",
  "😷": "face with medical mask",
  "😉": "winking",
  "😒": "unamused",
  "🤤": "drooling",
  "🤩": "star-struck",
  "❤️": "red heart",
  "💔": "broken heart",
  "🍇": "grapes",
  "🍈": "melon",
  "🍉": "watermelon",
  "🍏": "green apple",
  "🍑": "peach",
  "🥝": "kiwi",
  "🌮": "taco",
  "🧈": "butter",
  "🍿": "popcorn",
  "💌": "love letter",
  "💣": "bomb",
  "🪀": "yo-yo",
  "🦝": "raccoon",
  "🐯": "tiger face",
  "🦁": "lion",
  "🐁": "mouse",
  "🐀": "rat",
  "🦈": "shark",
  "🦋": "butterfly",
  "🦅": "eagle"
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
      <div className="databaseEmojiContainer">
        {keysDataBase.map(function (item) {
          return (
            <span
              key={item}
              style={{
                padding: "0.7rem",
                display: "inline-block",
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
    </div>
  );
}
