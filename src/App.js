import "./App.css";
import React, { useState } from "react";
import Toggle from "./components/Toggle/index ";

function App() {
  const [value, setValue] = useState(false);
  return (
    <div className="App">
      <Toggle
        isOn={value}
        onColor={"rgb(0,250 , 0)"}
        handleToggle={() => setValue(!value)}
        onColor1={" rgba(137, 43, 226,1)"}
        onColor2={"rgba(00,10,110,1)"}
        onVisible={"visible"}
        onFontSize={"70px"}
      />
    </div>
  );
}

export default App;
