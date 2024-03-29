import React, { useEffect, useState, useRef } from "react";
import "./DisplayResult.scss";
import { useGlobalData } from "./AppContext";
import Meanings from "./Meanings";

import { FaSearch } from "react-icons/fa";

function DisplayResult() {
  const { searchResult, result, setResult } = useGlobalData();
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    async function getSearchValue() {
      try {
        if (searchResult == "") {
          return;
        }
        setLoading(true);
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchResult}`);

        const data = await res.json();

        setResult(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);

        console.error("Error:", error);
      }
    }
    getSearchValue();
  }, [searchResult]);

  // const filteredData = result?.filter((obj) => obj.phonetics.some((phon) => phon.audio !== ""));
  // console.log(filteredData[0]?.phonetics.filter((item) => item.audio != "")[0].audio);
  // // console.log(audioValues);

  function playAudio() {
    let audio = new Audio();

    const audioValues = result.map((word) => {
      const phonetics = word.phonetics;
      const audio = phonetics.filter((p) => p.audio !== "").map((p) => p.audio);
      return audio;
    });

    // console.log(audioValues[0][0]);

    // audio.src = result
    //   .filter((item) => item.phonetics.length)
    //   .map((item) => item.phonetics.map((item) => item.audio).filter((item) => item !== "")[0])[0];

    audio.src = audioValues[0][0];
    audio.play();
  }

  return (
    <>
      {result[0] && !loading ? (
        <div className="result__container">
          <section className="word__container">
            <div>
              <p className="word">{result[0]?.word}</p>
              <p className="phonetic">{result[0]?.phonetic}</p>
            </div>

            {result[0]?.phonetic && (
              <div className="audioContainer">
                <button
                  className="play-btn"
                  onClick={playAudio}
                >
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 21 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 0V21L21 10.5L0 0Z"
                      fill="#A445ED"
                    />
                  </svg>
                </button>
              </div>
            )}
          </section>

          {result.map((item) =>
            item.meanings.map((item, i) => {
              return (
                <Meanings
                  key={i}
                  {...item}
                />
              );
            })
          )}

          <section className="sourceUrl">
            <span>Source: </span>
            <span className="source_link">
              <a
                href={result[0].sourceUrls[0]}
                target="_blank"
              >
                {result[0].sourceUrls[0]}
              </a>
            </span>
            <span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9 2.11365C8.58579 2.11365 8.25 1.77786 8.25 1.36365C8.25 0.949434 8.58579 0.613647 9 0.613647H12.6364C12.6623 0.613647 12.6878 0.614959 12.713 0.61752C12.7869 0.625017 12.8575 0.643222 12.9235 0.670557C13.0113 0.706887 13.0936 0.760611 13.1651 0.831729C13.1656 0.832258 13.1662 0.832787 13.1667 0.833317C13.1672 0.833848 13.1678 0.834379 13.1683 0.83491C13.2394 0.906448 13.2931 0.988753 13.3295 1.07656M9 2.11365H10.8257ZM10.8257 2.11365L4.83331 8.10604C4.54041 8.39894 4.54041 8.87381 4.83331 9.16671C5.1262 9.4596 5.60107 9.4596 5.89397 9.16671L11.8864 3.17431V5.00001C11.8864 5.41422 12.2221 5.75001 12.6364 5.75001C13.0506 5.75001 13.3864 5.41422 13.3864 5.00001V1.36486C13.3864 1.3648 13.3864 1.36474 13.3864 1.36469C13.3864 1.36203 13.3864 1.35938 13.3863 1.35672M0.895706 3.44116C1.30914 3.02772 1.86988 2.79547 2.45455 2.79547H6.09091C6.50512 2.79547 6.84091 3.13125 6.84091 3.54547C6.84091 3.95968 6.50512 4.29547 6.09091 4.29547H2.45455C2.26769 4.29547 2.08849 4.36969 1.95637 4.50182L1.95635 4.50183C1.82423 4.63395 1.75 4.81315 1.75 5.00001V11.5455C1.75 11.7323 1.82422 11.9115 1.95637 12.0437L1.95638 12.0437C2.08849 12.1758 2.26768 12.25 2.45455 12.25H9C9.18683 12.25 9.36603 12.1758 9.49818 12.0436C9.63033 11.9115 9.70455 11.7323 9.70455 11.5455V7.9091C9.70455 7.49489 10.0403 7.1591 10.4545 7.1591C10.8688 7.1591 11.2045 7.49489 11.2045 7.9091V11.5455C11.2045 12.1301 10.9723 12.6909 10.5588 13.1043C10.1454 13.5178 9.58466 13.75 9 13.75H2.45455C1.86988 13.75 1.30913 13.5178 0.895678 13.1043L1.42603 12.574L0.895685 13.1043C0.895683 13.1043 0.89568 13.1043 0.895678 13.1043C0.482266 12.6908 0.25 12.1301 0.25 11.5455V5.00001C0.25 4.41534 0.482254 3.85461 0.895692 3.44117L1.42603 3.97149L0.895706 3.44116ZM0.895706 3.44116C0.895701 3.44116 0.895697 3.44117 0.895692 3.44117C0.895697 3.44117 0.895701 3.44116 0.895706 3.44116Z"
                  fill="#757575"
                />
              </svg>
            </span>
          </section>
        </div>
      ) : (
        result[0] && <div>LOADING</div>
      )}

      {result.title && (
        <div className="not__found">
          <FaSearch />
          <h1 className="not__found--title">{result.title}</h1>
          <p className="not__found--message">
            {result.message} {result.resolution}
          </p>
        </div>
      )}
    </>
  );
}

export default DisplayResult;
