const Controller = ({onChangeValue}) => {
    return <div>
        <button 
            onClick={() => {
                onChangeValue(-1);
            }}
        >-1</button>
        <button
            onClick={() => {
                onChangeValue(-10);
            }}
        >-10</button>
        <button
            onClick={() => {
                onChangeValue(-100);
            }}
        >-100</button>
        <button
            onClick={
                () => {
                    onChangeValue(100);
                }
            }>+100</button>
        <button
        onClick={() => {
            onChangeValue(10);
        }}>+10</button>
        <button onClick={() => {
            onChangeValue(1);
        }}>+1</button>
    </div>;
};

export default Controller;