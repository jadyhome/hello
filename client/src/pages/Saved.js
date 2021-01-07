import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { __GetInputs, __DeleteInputs } from "../services/InputService";
import { __GetOutputs, __DeleteOutputs } from "../services/OutputService";

const Saved = (props) => {
  const [input, setInput] = useState([]);
  const [output, setOutput] = useState([]);

  useEffect(() => {
    getInputs();
    getOutputs();
  }, []);

  const getInputs = async () => {
    const showInputs = await __GetInputs();
    setInput(showInputs);
    // console.log(showInputs);
  };

  const getOutputs = async () => {
    const showOutputs = await __GetOutputs();
    setOutput(showOutputs);
    // console.log(showOutputs);
  };

  return (
    <div className="saved-page">
      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/translate">translate</Link>}
      </div>

      <div className="inputs">
        {input.map((inpt) => (
          <div className="input-data" key={inpt.id}>
            <h4>{inpt.text}</h4>
          </div>
        ))}
      </div>

      <div className="outputs">
        {output.map((outpt) => (
          <div className="output-data" key={outpt.id}>
            <h4>{outpt.text}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Saved;
