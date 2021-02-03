import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  __CreateTranslations,
  __GetTranslations,
} from "../services/CreateService";
import CardTwo from "../components/CardTwo";
import "../styles/Create.css";

const Create = () => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [phrases, setPhrases] = useState("");
  const [translation, setTranslation] = useState("");
  const [romanization, setRomanization] = useState("");
  const [allTranslation, setAllTranslation] = useState([]);

  useEffect(() => {
    getTranslations();
  }, []);

  const handleFrom = async (e) => {
    setFrom(e.target.value);
  };
  const handleTo = async (e) => {
    setTo(e.target.value);
  };
  const handlePhrases = async (e) => {
    setPhrases(e.target.value);
  };
  const handleTranslation = async (e) => {
    setTranslation(e.target.value);
  };
  const handleRomanization = async (e) => {
    setRomanization(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      from: from,
      to: to,
      phrases: phrases,
      translation: translation,
      romanization: romanization,
    };
    try {
      await __CreateTranslations(data);
      console.log(data);
    } catch (error) {
      throw error;
    }
  };

  const getTranslations = async () => {
    const getAllTranslations = await __GetTranslations();
    setAllTranslation(getAllTranslations);
  };

  return (
    <div className="create-page">
      <div className="top-bar">
        <h1 className="header">create</h1>
      </div>

      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/saved">saved</Link>}
        {<Link to="/korean">korean</Link>}
        {<Link to="/japanese">japanese</Link>}
        {<Link to="/chinese">chinese</Link>}
        {<Link to="/about">about</Link>}
      </div>

      
      <div className="create-container">
      <h6 className="create-title">input your own translations</h6>
        <form className="create-form" onSubmit={handleSubmit}>
          <input placeholder="from what language" onChange={handleFrom} />
          <input placeholder="to what language" onChange={handleTo} />
          <input placeholder="phrase" onChange={handlePhrases} />
          <input placeholder="translation" onChange={handleTranslation} />
          <input placeholder="romanizaton" onChange={handleRomanization} />
          <button type="submit" className="create-button">
            create
          </button>
        </form>
      </div>

      <div className="created-cards">
        {allTranslation.map((trans) => (
          <CardTwo
            key={trans.id}
            from={trans.from}
            to={trans.to}
            phrases={trans.phrases}
            translation={trans.translation}
            romanization={trans.romanization}
          />
        ))}
      </div>
    </div>
  );
};

export default Create;
