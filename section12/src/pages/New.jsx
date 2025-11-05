import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { ActionContext } from "../App";
import { useNavigate } from "react-router-dom";

const New = () => {
  const nav = useNavigate();

  //const actionContext = useContext(ActionContext);
  const { onCreate } = useContext(ActionContext);

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
      <Header title={"새 일기 쓰기"} leftChild={<Button text={"뒤로가기"} />} />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
