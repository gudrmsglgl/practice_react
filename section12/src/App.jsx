import "./App.css";
import { useReducer, createContext, useEffect, useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Diary from "./pages/Diary";
import Home from "./pages/Home";
import New from "./pages/New";
import NotFound from "./pages/NotFound";
import Edit from "./pages/Edit";
import { useLocalStorageDiaryEffect } from "./hooks/useLocalStorageDiaryEffect"; 

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
  let newState;
  switch (action.type) {
    case "INIT":
      return action.data
    case "CREATE":
      newState = [action.data, ...state];
      break;
    case "UPDATE":
      newState = state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item
      );
      break;
    case "DELETE":
      newState = state.filter((item) => String(item.id) !== String(action.id));
      break;
  }
  
  return newState
}

export const DataContext = createContext();
export const ActionContext = createContext();

// 1. "/" : 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary 페이지
function App() {
  const idRef = useRef(0); 
  const [data, dispatch] = useReducer(reducer, null); 
  const initialLoadedData = useLocalStorageDiaryEffect(mockData); // 훅에서 data만 받아오도록 변경

  useEffect(() => {
    if (initialLoadedData) {
      dispatch({ type: "INIT", data: initialLoadedData });
      
      let maxId = 0;
      initialLoadedData.forEach((item) => {
        if (item.id > maxId) {
          maxId = item.id;
        }
      });
      idRef.current = maxId + 1;
    }
  }, [initialLoadedData]);

  useEffect(() => {
    if (data) {
      localStorage.setItem("diaryList", JSON.stringify(data));
    }
  }, [data]);

  if (data === null) return <div>Loading...</div>;

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
