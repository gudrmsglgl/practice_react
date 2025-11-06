import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useEffect, useContext, useState } from "react";
import { DataContext } from "../App";
import { ActionContext } from "../App";
import useTakeDiary from "../hooks/useTakeDiary";
import { usePageTitleEffect } from "../hooks/usePageTitleEffect";

const Edit = () => {
  const params = useParams();
  const nav = useNavigate();

  usePageTitleEffect(`${params.id}번 일기 수정`);

  const { onUpdate, onDelete } = useContext(ActionContext);
  const diary = useTakeDiary(params.id);
  
  const onSubmit = (inputForm) => {
    if (window.confirm("수정하시겠습니까?")) {
      onUpdate(inputForm.id, inputForm.createdDate.getTime(), inputForm.emotionId, inputForm.content);
      nav(-1, { replace: true});
    }
  }

  const onClickDelete = () => {

    const isConfirmed = window.confirm("정말 삭제하시겠습니까?");
    if (isConfirmed) {
      onDelete(params.id);
      nav(-1, { replace: true});
    }
  }
  
  const onBack = () => {
    nav(-1, { replace: true});
  };

  return (
    <div>
      <Header 
        title={"일기 수정"} 
        leftChild={<Button onClick={onBack} text={"뒤로가기"}/>}
        rightChild={<Button text={"삭제하기"} type={"NEGATIVE"} onClick={onClickDelete}/>}
      />
      <Editor
        onSubmit={onSubmit} 
        receivedDiary={diary}
      />
    </div>
  )
};

export default Edit;
