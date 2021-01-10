import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about-page">
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
        {<Link to="/chinese">chinese</Link>}
      </div>

      <div className="about-title">
        <p>
          about <em>mother-tongue</em>
        </p>
      </div>
      <div className="about-box">
        <div className="about-bar">
          <h1>about</h1>
          <li>–</li>
          <li>x</li>
        </div>
        <div className="about-info">
          <h2>
            mother-tongue is a full-stack translating website utilizing google's
            cloud platform translate api. 
            <br />
            <br />
            i've also incorporated my own translations in the languages i'm most
            familiar with. 
            <br />
            <br />
            feel free to look at my github @ jadyhome 👋
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;