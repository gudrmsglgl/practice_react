import { useState, useEffect, useRef } from 'react'
import Controller from './components/Controller';
import Viewer from './components/Viewer';
import Even from './components/Even';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const isMount = useRef(false);

  //1. 마운트 : 탄생
  useEffect(() => {
    console.log('mount!');
  }, []);

  //2. 업데이트 : 변화, 리렌더링
  useEffect(() => {
    // 해당 코드는 맨 처음 Mount 될 때도 실행되기 때문에 넣어서 방지
    if (!isMount.current) {
      isMount.current = true;
      return;
    } 

    console.log('update!');
  });
  //3. 언마운트 : 죽음

  useEffect(() => {
    console.log(`count: ${count}`);
  }, [count]);
  // 의존성 배열
  // dependency array
  // deps

  const onChangeValue = (value) => {
    setCount(count + value);
    // useEffect 대신에 여기서 console.log 하면 왜 안 되는지
    // 해당 setCount가 비동기적으로 처리되기 때문
    // 따라서 count 값이 아직 업데이트 되지 않은 상태에서 console.log가 실행됨
  };
  
  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count}/>  
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller onChangeValue={onChangeValue}/>
      </section>
    </div>
  )
}

export default App
