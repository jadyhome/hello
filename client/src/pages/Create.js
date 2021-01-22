import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  __CreateTranslations,
  __GetTranslations,
} from "../services/CreateService";
import CardTwo from "../components/CardTwo";

const Create = () => {
  const [create, setCreate] = useState([]);
  const [translation, setTranslation] = useState([]);

  useEffect(() => {
    getTranslations();
  }, []);

  const createTranslations = async () => {
    try {
      const createNew = await __CreateTranslations();
      setCreate(createNew);
    } catch (error) {
      throw error;
    }
  };

  const getTranslations = async () => {
    const getAllTranslations = await __GetTranslations();
    setTranslation(getAllTranslations);
  };

  return (
    <div className="create-page">
      <div className="top-bar">
        <h1 className="header">create -- in process</h1>
      </div>

      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/saved">saved</Link>}
        {<Link to="/korean">korean</Link>}
        {<Link to="/japanese">japanese</Link>}
        {<Link to="/chinese">chinese</Link>}
        {<Link to="/about">about</Link>}
      </div>

      <div className="created-cards">
        {translation.map((trans) => (
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
