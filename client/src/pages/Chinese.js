import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { __GetZh } from "../services/LanguageService";
import Card from "../components/Card";

const Chinese = () => {
  const [zh, setZh] = useState([]);

  useEffect(() => {
    getZh();
  }, []);

  const getZh = async () => {
    const zhLang = await __GetZh();
    setZh(zhLang);
  };

  return (
    <div className="zh-page">
      <div className="top-bar">
        <h1 className="header">zh</h1>
      </div>

      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/translate">translate</Link>}
        {<Link to="/saved">saved</Link>}
        {<Link to="/korean">korean</Link>}
        {<Link to="/japanese">japanese</Link>}
        {<Link to="/create">create</Link>}
        {<Link to="/about">about</Link>}
      </div>

      <div className="info">
        <h6>
          chinese 101 <br /> common phrases you can use
        </h6>
      </div>

      <div className="zh-card">
        {zh.map((z) => (
          <Card
            key={z.id}
            phrases={z.phrases}
            translation={z.translation}
            romanization={z.romanization}
          />
        ))}
      </div>
    </div>
  );
};

export default Chinese;
