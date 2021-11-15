import React from "react";
import "./Toggle.css";
import Cocktail from "./images/483241.png";
import Cocktail2 from "./images/483242.png";
import Cocktail3 from "./images/483243.png";
function Toggle({
  isOn,
  handleToggle,
  onColor,
  onColor1,
  onColor2,
  onVisible,
  onFontSize,
}) {
  return (
    <>
      <div className="box1" style={{ backgroundImage: isOn && onColor1 }}>
        <input
          checked={isOn}
          onChange={handleToggle}
          className="toggle-checkbox"
          id={`toggle-new`}
          type="checkbox"
        />
        <label
          style={{ background: isOn && onColor }}
          className="toggle-label"
          htmlFor={`toggle-new`}
        >
          <span className={`toggle-button`}></span>
        </label>
        <p
          className="p"
          style={{ color: isOn && onColor1, fontSize: isOn && onFontSize }}
        >
          Hello
        </p>
        <p
          className="p1"
          style={{ color: isOn && onColor2, fontSize: isOn && onFontSize }}
        >
          5 O'Clock
        </p>

        <img
          className="cocktail"
          style={{ visibility: isOn && onVisible }}
          src={Cocktail}
          alt="cocktail"
        />
        <img
          className="cocktail3"
          style={{ visibility: isOn && onVisible }}
          src={Cocktail3}
          alt="cocktail"
        />

        <img
          className="cocktail2"
          style={{ visibility: isOn && onVisible }}
          src={Cocktail2}
          alt="cocktail"
        />
      </div>
    </>
  );
}

export default Toggle;
