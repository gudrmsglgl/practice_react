import {useState, useEffect, useContext} from "react";
import { DataContext } from "../App";

function useTakeDiary(id) {
  const totalDiaryList = useContext(DataContext);
  const [diary, setDiary] = useState(null);

  useEffect(() => {
    const receivedDiary = totalDiaryList.find((diary) => Number(diary.id) === Number(id));
    if (!receivedDiary) {
      window.alert("없는 일기입니다.");
      nav("/", { replace: true });
    }
    setDiary(receivedDiary);
  }, [id]);

  return diary;
}

export default useTakeDiary;