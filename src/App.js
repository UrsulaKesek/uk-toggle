import "./App.css";
import React, { useState } from "react";
import Toggle from "./components/Toggle/index ";

function App() {
  const [value, setValue] = useState(false);
  return (
    <div className="App">
      <Toggle
        isOn={value}
        handleToggle={() => setValue(!value)}
        onColor={"rgb(0,250 , 0)"}
        onColor1={" rgba(237, 43, 226,1)"}
        onColor2={"rgba(00,10,110,1)"}
        onVisible={"visible"}
        onHidden={"hidden"}
        onFontSize={"60px"}
      />
    </div>
  );
}

export default App;
