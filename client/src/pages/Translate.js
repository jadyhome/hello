import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { __TranslateText, __GetLanguages } from "../services/TranslateService";

const Translate = () => {
  const [text, setText] = useState("");
  const [language, setLanguage] = useState([]);
  const [selectLanguage, setSelectLanguage] = useState("");
  const [translate, setTranslate] = useState([]);

  useEffect(() => {
    getLanguages();
  }, []);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      translateText();
    }
  };

  const getLanguages = async () => {
    const response = await __GetLanguages();
    setLanguage(response);
  };

  const translateText = async () => {
    try {
      const response = await __TranslateText(selectLanguage, text);
      setTranslate(response);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="translate-page">
      <div className="top-bar">
        <h1 className="header">translate</h1>
      </div>

      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/saved">saved</Link>}
        {<Link to="/korean">korean</Link>}
        {<Link to="/japanese">japanese</Link>}
        {<Link to="/chinese">chinese</Link>}
        {<Link to="/create">create</Link>}
        {<Link to="/about">about</Link>}
      </div>

      <div className="inout-container">
        <div className="input">
          <div className="bar">
            <h1>x _ o</h1>
            <li>_</li>
            <li>❑</li>
            <li>X</li>
          </div>

          <div className="dropdown">
            <select
              className="select-language"
              value={selectLanguage}
              onChange={(e) => setSelectLanguage(e.target.value)}
            >
              {language.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
          </div>

          <form className="translate-form" onSubmit={handleSubmit}>
            <textarea placeholder="input text" onChange={handleChange} />
            <button type="submit" className="translate-button">
              translate
            </button>
          </form>
        </div>

        <div className="output">
          <div className="bar">
            <h1>x _ o</h1>
            <li>_</li>
            <li>❑</li>
            <li>X</li>
          </div>
          <div className="empty">
            <select>
              <option>beep</option>
              <option>boop</option>
            </select>
          </div>
          <div className="output-wrap">
            <div className="output-textbox">
              <h3>{translate.translation}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translate;
