import { useState } from 'react';

const Bulb = () => {
  const [light, setLight] = useState("OFF");

  return (
    <div>
      <button onClick = {() => {
        setLight(light === "ON" ? "OFF" : "ON");
      }}>
        {light === "ON" ? "전구끄기" : "전구켜기" }
      </button>

      {light === "ON" ? (
        <h1 style={{ backgroundColor: "orange" }}>ON</h1>
      ) : (
        <h1 style={{ backgroundColor: "grey"}}>OFF</h1>
      )}
    </div>
  )
};

export default Bulb
