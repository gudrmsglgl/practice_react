import "./Main.css";

// JSX 주의사항
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있다
// 2. 숫자, 문자열, 배열 값만 렌더링 된다
// 3. 모든 태그는 닫혀있어야 한다
// 4. 최상위 태그는 하나여야 한다 (마땅히 없으면 빈 태그를 넣어도 됨)
function Main() {
    const user = {
        name: "홍길동",
        isLogin: true
    };
    
    if (user.isLogin) {
        return <div className="logout">로그인 성공!</div>;
    }

    return <div>로그인 실패!</div>;

    // return (
    //     <>
    //     {
    //         user.isLogin ? 
    //         <div>로그인 성공!</div> : 
    //         <div>로그인 실패!</div>
    //     }
    //     </>
    // )
}

export default Main