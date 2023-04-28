import React from "react";
import "./Meanings.scss";
import { useGlobalData } from "./AppContext";


function Meanings(props) {
  return (
    <div>
      <div className="meaning__container">
        <p className="meaning-title">{props.partOfSpeech}</p>
        <ul className="definitions">
          <p>Meanings</p>
          {props.definitions.map((item, i) => {
            return (
              <li key={i}>
                <p className="definition">{item.definition}</p>
                {item.example && <p className="example">{`"${item.example}"`}</p>}
              </li>
            );
          })}
        </ul>

       {props.synonyms != 0 && <div className="synonyms">
          <p>Synonyms: </p>
          <ul className="synonyms__list">
            {props.synonyms.map((item, i) => {
              return (
                <li
                  key={i}
                  className="synonyms__list--item"
                >{`${item}`}</li>
              );
            })}
          </ul>
        </div>}

        {props.antonyms != 0 && <div className="antonyms">
          <p>Antonyms: </p>

          <ul className="antonyms__list">
            {props.antonyms.map((item, i) => {
              return (
                <li
                  key={i}
                  className="antonyms__list--item"
                >{`Antonyms ${item}`}</li>
              );
            })}
          </ul>
        </div>}
      </div>
    </div>
  );
}

export default Meanings;
