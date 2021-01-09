import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { __GetKo } from "../services/LanguageService";

const Korean = () => {
  const [ko, setKo] = useState([]);

  useEffect(() => {
    getKo();
  }, []);

  const getKo = async () => {
    const koLang = await __GetKo();
    setKo(koLang);
    console.log(koLang);
  };

  return (
    <div className="ko-page">
      <div className="top-left">
        <div className="ex">x</div>
        <div className="line">_</div>
        <div className="oh">o</div>
      </div>

      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/translate">translate</Link>}
        {<Link to="/saved">saved</Link>}
        {<Link to="/japanese">japanese</Link>}
        {<Link to="/chinese">chinese</Link>}
      </div>

      <div className="ko-card">
        {ko.map((k) => {
          <div className="k" key={k.id}>
            <p>{k.phrases}</p>
            <p>{k.translation}</p>
            <p>{k.romanization}</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Korean;
