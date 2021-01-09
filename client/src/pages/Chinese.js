import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Chinese = () => {
  return (
    <div>
      <h1>Chinese</h1>
      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/translate">translate</Link>}
        {<Link to="/saved">saved</Link>}
        {<Link to="/korean">korean</Link>}
        {<Link to="/japanese">japanese</Link>}
      </div>
    </div>
  );
};

export default Chinese;
