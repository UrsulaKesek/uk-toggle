import React from "react";
import "./Toggle.css";
import Cocktail from "./images/483241.png";
import Cocktail2 from "./images/483242.png";
import Cocktail3 from "./images/483243.png";
import Cocktail4 from "./images/Artboard 1.png";
import Cocktail5 from "./images/Artboard 2.png";
import Cocktail6 from "./images/Artboard 3.png";
import Cocktail7 from "./images/Artboard 4.png";
import Cocktail8 from "./images/Artboard 5.png";
function Toggle({
  isOn,
  handleToggle,
  onColor,
  onColor1,
  onColor2,
  onVisible,
  onHidden,
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
          7 O'Clock ❄️ ❄️ ❄️ ❄️ ❄️
        </p>

        <img
          className="cocktail"
          style={{ visibility: isOn && onHidden }}
          src={Cocktail}
          alt="cocktail"
        />
        <img
          className="cocktail3"
          style={{ visibility: isOn && onHidden }}
          src={Cocktail3}
          alt="cocktail"
        />

        <img
          className="cocktail2"
          style={{ visibility: isOn && onHidden }}
          src={Cocktail2}
          alt="cocktail"
        />
        <img
          className="cocktail4"
          style={{ visibility: isOn && onVisible }}
          src={Cocktail4}
          alt="cocktail"
        />
        <img
          className="cocktail5"
          style={{ visibility: isOn && onVisible }}
          src={Cocktail5}
          alt="cocktail"
        />
        <img
          className="cocktail6"
          style={{ visibility: isOn && onVisible }}
          src={Cocktail6}
          alt="cocktail"
        />
        <img
          className="cocktail7"
          style={{ visibility: isOn && onVisible }}
          src={Cocktail7}
          alt="cocktail"
        />
        <img
          className="cocktail8"
          style={{ visibility: isOn && onVisible }}
          src={Cocktail8}
          alt="cocktail"
        />
      </div>
    </>
  );
}

export default Toggle;
