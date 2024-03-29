import React, { useState } from "react";
import "./Header.scss";
import { useGlobalData } from "./AppContext";
function Header() {
  const { setDarkMode, darkMode, setFont, font } = useGlobalData();
  const [dropdown, setDropDown] = useState(false);

  function handleDarkMode(e) {
    const { name, checked } = e.target;

    setDarkMode((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }

  function changeFont(value) {
    setFont(value);
  }

  return (
    <header className="header">
      <div className="logo">
        <svg
          width="34"
          height="38"
          viewBox="0 0 34 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 1.75C4.13802 1.75 3.31141 2.09241 2.7019 2.7019C2.7019 2.7019 2.7019 2.7019 2.7019 2.7019M2.7019 2.7019C2.09241 3.3114 1.75 4.13805 1.75 5V33C1.75 33.4142 1.41421 33.75 1 33.75C0.585786 33.75 0.25 33.4142 0.25 33V5C0.25 3.74022 0.750449 2.53204 1.64124 1.64124L1.64124 1.64124C2.53204 0.750451 3.74018 0.25 5 0.25H31.8C32.3172 0.25 32.8132 0.455444 33.1789 0.821187C33.5446 1.18693 33.75 1.68291 33.75 2.2V28.428C33.75 28.5293 33.7299 28.6259 33.6935 28.714C33.7299 28.8021 33.75 28.8987 33.75 29C33.75 29.4142 33.4142 29.75 33 29.75H5C4.58579 29.75 4.25 29.4142 4.25 29C4.25 28.5858 4.58579 28.25 5 28.25H32.25V2.2C32.25 2.08062 32.2026 1.96621 32.1182 1.88186L32.1181 1.88175C32.0338 1.79742 31.9194 1.75 31.8 1.75H5M4.25 37C4.25 36.5858 4.58579 36.25 5 36.25H33C33.4142 36.25 33.75 36.5858 33.75 37C33.75 37.4142 33.4142 37.75 33 37.75H5C4.58579 37.75 4.25 37.4142 4.25 37Z"
            fill="#757575"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M5 29.75C4.13801 29.75 3.3114 30.0924 2.70192 30.7019L2.70189 30.7019C2.09241 31.3114 1.75 32.138 1.75 33C1.75 33.862 2.09241 34.6886 2.70189 35.2981L2.70192 35.2981C3.3114 35.9076 4.13801 36.25 5 36.25C5.41421 36.25 5.75 36.5858 5.75 37C5.75 37.4142 5.41421 37.75 5 37.75C3.74019 37.75 2.53204 37.2496 1.64122 36.3587C0.750434 35.468 0.25 34.2598 0.25 33C0.25 31.7402 0.750446 30.532 1.64125 29.6413L2.17157 30.1716L1.64125 29.6413C2.53207 28.7504 3.74019 28.25 5 28.25C5.41421 28.25 5.75 28.5858 5.75 29C5.75 29.4142 5.41421 29.75 5 29.75Z"
            fill="#757575"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.25 9C10.25 8.58579 10.5858 8.25 11 8.25H23C23.4142 8.25 23.75 8.58579 23.75 9C23.75 9.41421 23.4142 9.75 23 9.75H11C10.5858 9.75 10.25 9.41421 10.25 9Z"
            fill="#757575"
          />
        </svg>
      </div>

      <div className="left-side__container">
        <button
          className="dropDown-btn"
          onClick={() => setDropDown((prev) => !prev)}
        >
          {font}
          <svg
            width="13"
            height="9"
            viewBox="0 0 13 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0.469666 1.53033L1.53033 0.469666L7 5.93934L12.4697 0.469666L13.5303 1.53033L7 8.06066L0.469666 1.53033Z"
              fill="#A445ED"
            />
          </svg>
        </button>

        {dropdown && (
          <ul className="font__lists">
            <li
              className="font__lists--item"
              onClick={() => changeFont("Inter")}
            >
              Inter
            </li>
            <li
              className="font__lists--item"
              onClick={() => changeFont("Serif")}
            >
              Serif
            </li>
            <li
              className="font__lists--item"
              onClick={() => changeFont("Mono")}
            >
              Mono
            </li>
          </ul>
        )}

        <div className="theme">
          <input
            type="checkbox"
            id="theme"
            name="darkMode"
            value={darkMode.darkMode}
            checked={darkMode.darkMode}
            onChange={handleDarkMode}
          />
          <label
            className="circle"
            htmlFor="theme"
          ></label>

          <label
            htmlFor="theme"
            className=""
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M7.25326 0.362613C7.47382 0.49939 7.60799 0.740473 7.60799 1C7.60799 5.60985 8.75088 8.91843 10.9125 11.0802C13.0742 13.242 16.3828 14.3852 20.9931 14.3852C21.2526 14.3852 21.4936 14.5192 21.6304 14.7396C21.7672 14.96 21.7804 15.2355 21.6652 15.468C20.5343 17.7518 18.664 19.586 16.3587 20.6725L16.3586 20.6725C14.0532 21.7588 11.4482 22.0335 8.96685 21.452L8.96682 21.452C6.48548 20.8703 4.27381 19.4667 2.69126 17.469C1.10872 15.4713 0.248349 12.997 0.250002 10.4485L1 10.449L0.250002 10.4492C0.250002 10.4489 0.250002 10.4487 0.250002 10.4485C0.249593 8.34473 0.836716 6.28267 1.94522 4.49463L1.94522 4.49463C3.05385 2.7064 4.63991 1.26337 6.52462 0.328164C6.7571 0.212806 7.0327 0.225836 7.25326 0.362613ZM6.13723 2.27924C4.96348 3.05648 3.96688 4.08043 3.2201 5.285C2.2587 6.83575 1.74954 8.6242 1.75 10.4488L1.75 10.4495C1.74857 12.6595 2.49467 14.8052 3.86703 16.5376C5.23937 18.2699 7.15729 19.4872 9.30913 19.9916C11.4609 20.4959 13.72 20.2577 15.7193 19.3156C17.35 18.547 18.7297 17.3471 19.7151 15.856C15.4888 15.6586 12.167 14.4561 9.85186 12.1408C7.53699 9.82584 6.33478 6.50443 6.13723 2.27924Z"
                fill="#757575"
              />
            </svg>
          </label>
        </div>
      </div>
    </header>
  );
}

export default Header;
