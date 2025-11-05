import { useParams, useNavigate } from "react-router-dom"
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer"
import useTakeDiary from "../hooks/useTakeDiary";
import getStringedDate from "../util/get-string-date";

export default function Diary() {
    const nav = useNavigate();
    const params = useParams();
    const diary = useTakeDiary(params.id);
    if (!diary) {
        return <div>일기를 불러오는 중입니다...</div>;
    }

    const createdDate = new Date(diary.createdDate);
    return (
        <div>
            <Header 
                title={`${getStringedDate(createdDate)} 기록`}
                leftChild={<Button onClick={() => nav(-1)} text={"뒤로가기"} />}
                rightChild={<Button onClick={() => nav(`/edit/${params.id}`)}text={"수정하기"} />} 
            />
            <Viewer diary={diary} />
        </div>
    )
}
