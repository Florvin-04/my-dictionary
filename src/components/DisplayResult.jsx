import React, { useEffect, useState } from "react";
import "./DisplayResult.scss";
import { useGlobalData } from "./AppContext";

function DisplayResult() {
  const { searchResult, result, setResult } = useGlobalData();
  const [notFound, setNotFound] = useState(false);
  console.log(searchResult);

  useEffect(() => {
    async function getSearchValue() {
      try {
        if (searchResult == "") {
          return;
        }
        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchResult}`);
      
        const data = await res.json();
        setResult(data);
        setNotFound(false);
      } catch (error) {
        console.error("Error:", error);
        setNotFound(true);
      }
    }
    getSearchValue();
  }, [searchResult]);

  console.log(result);

  return (
    <>
      {result[0] && (
        <div className="result__container">
          <section className="word__container">
            <div>
              <p className="word">{result[0]?.word}</p>
            </div>
            <button>play</button>
          </section>
        </div>
      )}

      {!result[0] && <div>notFound</div>}
    </>
  );
}

export default DisplayResult;
