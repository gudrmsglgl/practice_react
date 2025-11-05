import './List.css';
import TodoItem from './TodoItem';
import { StateContext } from '../App';
import { useState, useContext } from 'react';

const List = () => {
    const todos = useContext(StateContext);
    
    const [inputSearch, setInputSearch] = useState("");

    function onChange(e) {
        setInputSearch(e.target.value);
    }

    function getFilteredTodos() {
        if (inputSearch === "") return todos;
        
        const lowerInputSearch = inputSearch.toLowerCase();

        return todos
            .filter((item) => item.content.toLowerCase().includes(lowerInputSearch))
    }

    const filteredTodos = getFilteredTodos();

    return (
    <div className="List">
        <h4>Todo List 🌱</h4>
        <input value={inputSearch} onChange={onChange} placeholder="검색어를 입력하세요" />
        <div className="todos_wrapper">        
            {
                filteredTodos.map((item) => <TodoItem key={item.id} {...item}/>)
            }
        </div>
    </div>
    ); 
};

//filteredTodos.map((item) => <TodoItem key={item.id} {...item} onClickDelete={onClickDelete} onUpdate={onUpdate}/>)

export default List;