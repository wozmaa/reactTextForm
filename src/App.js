import { useState } from "react";

function App(props) {
  const [text, setText] = useState("");
  const [textError, setTextError] = useState("Поле не может быть пустым");
  const [inputClass, setInputClass] = useState("");
  const [buttonActive, setButtonActive] = useState(true);
  const [textInfo, setTextInfo] = useState("");
  const [textInfoClass, setTextInfoClass] = useState("red-class")

  const handleCheck = (e) => {
    setText(e.target.value);
    setInputClass("");
    setButtonActive(false);
    setTextInfo("");
  };

  const blurHandle = () => {
    if (text === "") {
      setInputClass("is-error");
      setTextInfo(textError);
      setTextInfoClass("red-class")
    }
  };

  const handleClick = (e) => {
    console.log(text)
    setTextInfo("Сообщение успешно отправлено");
    setText("")
    setTextInfoClass("green-class")
  };

  return (
    <div className="main">
      <form>
        <input
          className={inputClass}
          type="text"
          value={text}
          placeholder="введите текст"
          onChange={handleCheck}
          onBlur={blurHandle}
        />

        <button
          disabled={buttonActive}
          onClick={handleClick} 
          type="button"
          >
          Отправить
        </button>

        <div className={textInfoClass}>{textInfo}</div>

        
      </form>
      <p>мы будем ездить на ролс ройсах</p>
    </div>
  );
}

export default App;
