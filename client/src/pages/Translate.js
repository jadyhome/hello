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
      console.log(response);
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="translate-page">
      <div className="top-left">
        <div className="ex">x</div>
        <div className="line">_</div>
        <div className="oh">o</div>
      </div>

      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/saved">saved</Link>}
      </div>

      <div className="inout-container">
        <div className="input">
          <div className="bar">
            <h1>x_x</h1>
            <li>–</li>
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

          <form onSubmit={handleSubmit}>
            <textarea placeholder="INPUT TEXT" onChange={handleChange} />
            <button type="submit" className="translate-button">
              Translate
            </button>
          </form>
        </div>

        <div className="header">
          <div className="bar">
            <h1>x_x</h1>
            <li>–</li>
            <li>X</li>
          </div>
          <div className="empty">
            <select>
              <option>beep</option>
              <option>boop</option>
            </select>
          </div>
          <div className="output">
            <h3>{translate.translation}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Translate;
