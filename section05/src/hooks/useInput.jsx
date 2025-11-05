import { useState } from 'react';

// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건부로 호출될 수는 없다
// 3. 나만의 Hook 만들기
function useInput() {
    const [input, setInput] = useState("");
    const onChange = (e) => {
        setInput(e.target.value);
    };

    return [input, onChange]
}

export default useInput;
