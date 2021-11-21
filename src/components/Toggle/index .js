import React from "react";
import "./Toggle.css";
import Cocktail4 from "./images/Artboard 1.png";
import Cocktail4a from "./images/Artboard 1a.png";
import Cocktail5 from "./images/Artboard 2.png";
import Cocktail6 from "./images/Artboard 3.png";
import Cocktail7 from "./images/Artboard 4.png";
import Cocktail8 from "./images/Artboard 5.png";
import Snowflake6 from "./images/Snowflake6.png";
import Snowflake7 from "./images/Snowflake7.png";
import Snowflake8 from "./images/Snowflake8.png";
import Snowflake9 from "./images/Snowflake9.png";
import Snowflake10 from "./images/Snowflake10.png";
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
          7 O'Clock
        </p>
        <img
          className="snow6"
          style={{ visibility: isOn && onVisible }}
          src={Snowflake6}
          alt="snowflake"
        />
        <img
          className="snow7"
          style={{ visibility: isOn && onVisible }}
          src={Snowflake7}
          alt="snowflake"
        />
        <img
          className="snow8"
          style={{ visibility: isOn && onVisible }}
          src={Snowflake8}
          alt="snowflake"
        />
        <img
          className="snow9"
          style={{ visibility: isOn && onVisible }}
          src={Snowflake9}
          alt="snowflake"
        />
        <img
          className="snow10"
          style={{ visibility: isOn && onVisible }}
          src={Snowflake10}
          alt="snowflake"
        />

        <img
          className="cocktail4"
          style={{ visibility: isOn && onVisible }}
          src={Cocktail4}
          alt="cocktail"
        />
        <img
          className="cocktail4a"
          style={{ visibility: isOn && onVisible }}
          src={Cocktail4a}
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
