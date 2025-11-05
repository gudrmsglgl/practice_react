import "./App.css";
import { useReducer, useRef, createContext } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";

const mockData = [
  {
    id: 1,
    createdDate: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createdDate: new Date("2025-10-22").getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
  {
    id: 3,
    createdDate: new Date("2024-12-02").getTime(),
    emotionId: 3,
    content: "3번 일기 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
  }
}

export const DataContext = createContext();
export const ActionContext = createContext();

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지
function App() {
  const idRef = useRef(4);
  const [data, dispatch] = useReducer(reducer, mockData);

  function onCreate(createdDate, emotionId, content) {
    const newDiary = {
      id: idRef.current++,
      createdDate,
      emotionId,
      content,
    };

    dispatch({
      type: "CREATE",
      data: newDiary,
    });
  }

  function onUpdate(id, createdDate, emotionId, content) {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  }

  function onDelete(id) {
    dispatch({
      type: "DELETE",
      id,
    });
  }

  return (
    <>
      <DataContext.Provider value={data}>
        <ActionContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ActionContext.Provider>
      </DataContext.Provider>
    </>
  );
}

export default App;
