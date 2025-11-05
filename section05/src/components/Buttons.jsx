const Button = ({text, color = "black", children}) => {
    
    const handler = (e) => {
        console.log(`${text} 버튼 클릭`);
        console.log(e);
    };

    return (
        <>
        <button 
            onClick={handler}
            style={{color : color}}>{text}클릭
        <div>색상 {color.toUpperCase()}</div>
        {children}
        </button>
        </>
    );
};

export default Button;
