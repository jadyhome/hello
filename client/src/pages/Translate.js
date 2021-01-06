import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { __TranslateText, __GetLanguages } from "../services/TranslateService";

const Translate = (props) => {
  const [text, setText] = useState("");
  const [languages, setLanguage] = useState([]);
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
      translateText()
    }
  };

  const getLanguages = async () => {
    const response = await __GetLanguages();
    setLanguage(response);
  };

  const translateText = async () => {
    try {
      const response = await __TranslateText(selectLanguage, text);
      setTranslate(response)
      console.log(response)
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="translate-page">
      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/saved">saved</Link>}
      </div>

      <select
        className="select-language"
        value={selectLanguage}
        onChange={(e) => setSelectLanguage(e.target.value)}
      >
        {languages.map((lang) => (
          <option key={lang.id} value={lang.id}>
            {lang.name}
          </option>
        ))}
      </select>

      <div className="input">
        <form onSubmit={handleSubmit}>
          <input placeholder="INPUT TEXT" onChange={handleChange} />
          <button type="submit">Translate</button>
        </form>
      </div>
      <div className="output">
        {translate.translation}
      </div>
    </div>
  );
};

export default Translate;
