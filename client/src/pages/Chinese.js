import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { __GetZh } from "../services/LanguageService";

const Chinese = () => {
  const [zh, setZh] = useState([]);

  useEffect(() => {
    getZh();
  }, []);

  const getZh = async () => {
    const zhLang = await __GetZh();
    setZh(zhLang);
    console.log(zhLang);
  };

  return (
    <div className="zh-page">
      <div className="top-left">
        <div className="ex">x</div>
        <div className="line">_</div>
        <div className="oh">o</div>
      </div>

      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/translate">translate</Link>}
        {<Link to="/saved">saved</Link>}
        {<Link to="/korean">korean</Link>}
        {<Link to="/japanese">japanese</Link>}
      </div>

      <div className="zh-card">
        {zh.map((z) => {
          <div className="z" key={z.id}>
            <p>{z.phrases}</p>
            <p>{z.translation}</p>
            <p>{z.romanization}</p>
          </div>;
        })}
      </div>
    </div>
  );
};

export default Chinese;
