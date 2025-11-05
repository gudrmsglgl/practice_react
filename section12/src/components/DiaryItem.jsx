import { useNavigate } from "react-router-dom";
import getEmotionImage from "./../util/get-emotion-image";
import Button from "./Button";
import "./DiaryItem.css";

const DiaryItem = ({ id, createdDate, emotionId, content }) => {
  const nav = useNavigate();

  const goDiary = () => {
    nav(`/diary/${id}`);
  };

  const goEditDiary = () => {
    nav(`/edit/${id}`);
  };

  return (
    <div className="DiaryItem">
      <div onClick={goDiary} className={`img_section img_section_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div onClick={goDiary} className="info_section">
        <div className="created_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="content">{content}</div>
      </div>
      <div className="button_section">
        <Button text={"수정하기"} onClick={goEditDiary}/>
      </div>
    </div>
  );
};

export default DiaryItem;
