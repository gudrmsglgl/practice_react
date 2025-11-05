import { ActionContext } from '../App';
import './Editor.css';
import { useState, memo, useContext } from 'react';

const Editor = () => {
    const { onChange } = useContext(ActionContext);
    const [inputText, setText] = useState("");

    function onChangeInput(e) {
        setText(e.target.value);
    }

    function submit() {
        if (inputText.trim() === "") {
            alert("내용을 입력하세요");
            return;
        }

        onChange(inputText);
        setText("");
    }

    return (
        <div className="Editor">
            <input value={inputText} onChange={onChangeInput} placeholder="새로운 Todo.."></input>
            <button onClick={submit}>추가</button>
        </div>
    );
};

export default memo(Editor);