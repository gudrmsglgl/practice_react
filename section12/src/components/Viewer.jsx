import getEmotionImage from "../util/get-emotion-image";
import getEmotionData from "../util/get-emotion-data";
import "./Viewer.css"

const Viewer = ({ diary }) => {
    const emotionId = diary.emotionId;
    
    const emotionItem = getEmotionData().find((item) => String(item.emotionId) === String(emotionId));
    return (
        <div className="Viewer">
            <section className="img_section">
                <h4>오늘의 감정</h4>
                <div className={`emotion_img_wrapper emotion_img_wrapper_${emotionId}`}>
                    <img src={getEmotionImage(emotionId)} />
                    <div className="emotion_name">{emotionItem.emotionName}</div>
                </div>
            </section>
            <section className="content_section">
                <div className="content_wrapper">
                    <p>{diary.content}</p>
                </div>
            </section>
        </div>
    )
};

export default Viewer;