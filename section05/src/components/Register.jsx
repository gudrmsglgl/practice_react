import { useState, useRef } from 'react';

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
    const [input, setInput] = useState(
        {
            name: "",
            birth: "",
            country: "",
            bio: "" 
        }
    );
    const countRef = useRef(0);
    const inputRef = useRef();
    
    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current);
        

        setInput(
            {
                ...input,
                [e.target.name]: e.target.value
            }
        )
    }

    const confirm = () => {
        if (input.name.length < 5) {
            alert("이름은 5자 이상으로 입력해주세요.");
            inputRef.current.focus();
            return;
        }
    }

    return (
        <div>
            <div>
                <input
                    ref={inputRef}
                    name="name"
                    value={input.name} 
                    onChange={onChange} 
                    placeholder={"이름"}
                    />
                {input.name}
            </div>
            <div>
                <input name="birth" value={input.birth} onChange={onChange} type="date"/>
                {input.birth}
            </div>
            <div>
                <select name="country" value={input.country} onChange={onChange}>
                    <option value=""></option>
                    <option value="kor">대한민국</option>
                    <option value="chn">중국</option>
                    <option value="usa">미국</option>
                </select>
                {input.country}
            </div>    
            <div>
                <textarea
                    name="bio"
                    value={input.bio}
                    onChange={onChange}
                    placeholder="자기소개해주세요."/>
                {input.bio}
            </div>
            <button onClick={confirm}>제출</button>
        </div>
    )
};

export default Register