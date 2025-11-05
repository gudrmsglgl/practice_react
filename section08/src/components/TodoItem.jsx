import './TodoItem.css';
import { ActionContext } from '../App';
import { memo, useContext } from 'react';

const TodoItem = ({completed, id, content, date}) => {

    const { onClickDelete, onUpdate } = useContext(ActionContext);

    function submitDelete() {
        onClickDelete(id);
    }

    function onClickCheck(e) {
        onUpdate(id)
    }

    return (
    <div className="TodoItem">
        <input onChange={onClickCheck} checked={completed} type="checkbox" />
        <div className="content">{content}</div>
        <div className="date">{date}</div>
        <button onClick={submitDelete}>삭제</button>
    </div>
    );
}

export default memo(TodoItem);

// export default memo(TodoItem, (prevProps, nextProps) => {
//     //  반환값에 따라, prop 가 바뀌었는지 안 바뀌었는지 판단
//     //  T -> Props 바뀌지 않음 -> 리렌더링 X
//     //  F -> Props 바뀜 -> 리렌더링 O

//     if (prevProps.id !== nextProps.id) return false;
//     if (prevProps.completed !== nextProps.completed) return false;
//     if (prevProps.content !== nextProps.content) return false;
//     if (prevProps.date !== nextProps.date) return false;

//     // 핸들러 레퍼런스까지 안정화되어 있지 않다면 여기서는 검사하지 않음
//     return true;
// });

