import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useEffect, useState } from "react";
import { replace, useNavigate } from "react-router-dom";
import getEmotionData from "../util/get-emotion-data";
import getStringedDate from "../util/get-string-date";

const Editor = ({ onSubmit, receivedDiary }) => {
  const nav = useNavigate();

  const [inputForm, setInputForm] = useState({
    createdDate: new Date(),
    emotionId: -1,
    content: "",
  });

  useEffect(() => {
    if (receivedDiary) {
      setInputForm({
        ...receivedDiary,
        createdDate: new Date(receivedDiary.createdDate),
      });
    }
  }, [receivedDiary]);

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInputForm({
      ...inputForm,
      [name]: value,
    });
  };


  const submit = () => {
    onSubmit(inputForm);
  };

  const onBack = () => {
    nav(-1);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          value={getStringedDate(inputForm.createdDate)}
          type="date"
          onChange={onChangeInput}
        />
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {getEmotionData().map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === inputForm.emotionId}
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              }
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘은 어땠나요?</h4>
        <textarea
          name="content"
          value={inputForm.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        />
      </section>
      <section className="button_section">
        <Button onClick={onBack} text={"취소하기"} />
        <Button onClick={submit} text={"작성완료"} type={"POSITIVE"} />
      </section>
    </div>
  );
};

export default Editor;
