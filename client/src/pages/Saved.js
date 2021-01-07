import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { __GetInputs, __DeleteInputs } from "../services/InputService";
import { __GetOutputs, __DeleteOutputs } from "../services/OutputService";
import "../styles/Saved.css";

const Saved = () => {
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState([]);

  useEffect(() => {
    getInputs();
    getOutputs();
  }, []);

  const getInputs = async () => {
    const showInputs = await __GetInputs();
    setInput(showInputs);
    console.log(showInputs);
  };

  const getOutputs = async () => {
    const showOutputs = await __GetOutputs();
    setOutput(showOutputs);
    console.log(showOutputs);
  };

  const handleDeleteInput = async (id) => {
    try {
      await __DeleteInputs(id);
      await getInputs();
    } catch (error) {
      throw error;
    }
  };

  const handleDeleteOutput = async (id) => {
    try {
      await __DeleteOutputs(id);
      await getOutputs();
    } catch (error) {
      throw error;
    }
  };

  return (
    <div className="saved-page">
      <div className="top-left">
        <div className="ex">x</div>
        <div className="line">_</div>
        <div className="oh">o</div>
      </div>

      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/translate">translate</Link>}
      </div>

      <div className="inout-container">
        <div className="inputs-container">
          <div className="bartwo">
            <h1>input</h1>
            <li>–</li>
            <li>x</li>
          </div>
          <div className="inputs">
            {input.map((inpt) => (
              <div className="input-data" key={inpt.id}>
                <h4>{inpt.text}</h4>
                <button
                  className="delete"
                  onClick={() => handleDeleteInput(inpt.id)}
                >
                  🅧
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="outputs-container">
          <div className="bartwo">
            <h1>output</h1>
            <li>–</li>
            <li>x</li>
          </div>
          <div className="outputs">
            {output.map((outpt) => (
              <div className="output-data" key={outpt.id}>
                <h4>{outpt.text}</h4>
                <button
                  className="delete"
                  onClick={() => handleDeleteOutput(outpt.id)}
                >
                  🅧
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Saved;
