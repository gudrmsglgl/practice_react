import { useState, useRef, useCallback, createContext, useMemo, useReducer } from 'react'
import './App.css'
import Header from './components/Header';
import List from './components/List';
import Editor from './components/Editor';

let mockTodos = [
  { id: 1, content: 'React 공부하기', date: '2024-01-01', completed: false },
  { id: 2, content: 'JavaScript 복습하기', date: '2024-01-02', completed: false },
  { id: 3, content: 'CSS 스타일링 연습하기', date: '2024-01-03', completed: false },
];

// eslint-disable-next-line react-refresh/only-export-components
//export const AppContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const StateContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const ActionContext = createContext();

function reducer(state, actions) {
  switch (actions.type) {
    case 'onCreate': return [...state, actions.data];
    case 'onDelete': return state.filter((item) => item.id !== actions.data);
    case 'onUpdate': return state.map((item) => item.id !== actions.data ? item : {...item, completed: !item.completed});
  }
}

function App() {

  //const [todos, setTodos] = useState(mockTodos);
  const [todos, dispach] = useReducer(reducer, mockTodos)
  const idRef = useRef(4);

  const onChange = useCallback((inputText)=> {
    const newTodo = {
      id: idRef.current++,
      content: inputText,
      date: new Date().toLocaleDateString(),
      completed: false,
    }

    dispach(
      {
        type: "onCreate",
        data: newTodo
      }
    )
    // setTodos(
    //   [...todos, newTodo]
    // )
  },[]); 

  const onClickDelete = useCallback((id) => {
    dispach(
      {
        type: "onDelete",
        data: id
      }
    )

    // setTodos(
    //   todos.filter((item) => item.id !== id)
    // )
  }, []);

  const onUpdate = useCallback((id) => {
    dispach(
      {
        type: "onUpdate",
        data: id
      }
    )
    // setTodos(
    //   todos.map((item) => item.id === id ? {...item, completed: !item.completed} : item)    
    // )
  }, []);

  const actions = useMemo(() => {
    return {onChange, onClickDelete, onUpdate};
  }, []);


  return (
    <div className="App">
      <Header />
        <StateContext.Provider value={todos}>
          <ActionContext.Provider value={actions}>
            <Editor/>
            <List/>
          </ActionContext.Provider>
        </StateContext.Provider>
    </div>
  )
}

export default App
