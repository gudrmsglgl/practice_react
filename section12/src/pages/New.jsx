import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { ActionContext } from "../App";
import { useNavigate } from "react-router-dom";
import { usePageTitleEffect } from "../hooks/usePageTitleEffect";

const New = () => {
  const nav = useNavigate();

  const { onCreate } = useContext(ActionContext);
  usePageTitleEffect("새 일기 쓰기");

  const onSubmit = (inputForm) => {
    onCreate(
      inputForm.createdDate.getTime(),
      inputForm.emotionId,
      inputForm.content
    );
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header 
        title={"새 일기 쓰기"} 
        leftChild={<Button onClick={() => nav(-1)} text={"뒤로가기"} />} />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
