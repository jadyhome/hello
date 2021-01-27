import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { __CreateComment, __GetComments } from "../services/CommentService";
import CardThree from "../components/CardThree";

const About = () => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [allComment, setAllComment] = useState([]);

  useEffect(() => {
    getComments();
  }, []);

  const handleName = async (e) => {
    setName(e.target.value);
  };

  const handleComment = async (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { name: name, comment: comment };
    try {
      await __CreateComment(data);
      console.log(data);
    } catch (error) {
      throw error;
    }
  };

  const getComments = async () => {
    const comments = await __GetComments();
    setAllComment(comments);
  };

  return (
    <div className="about-page">
      <div className="top-bar">
        <h1 className="header">about</h1>
      </div>

      <div className="nav">
        {<Link to="/">home</Link>}
        {<Link to="/translate">translate</Link>}
        {<Link to="/saved">saved</Link>}
        {<Link to="/korean">korean</Link>}
        {<Link to="/japanese">japanese</Link>}
        {<Link to="/chinese">chinese</Link>}
        {<Link to="/create">create</Link>}
      </div>

      <div className="about-title">
        <p>
          about <br />
          <em>mother–tongue</em>
        </p>
      </div>
      <div className="about-box">
        <div className="about-bar">
          <h1>about</h1>
          <li>_</li>
          <li>❑</li>
          <li>X</li>
        </div>
        <div className="about-info">
          <h2>
            mother-tongue is a full-stack translating website utilizing google's
            cloud platform translate api.
            <br />
            <br />
            i've also incorporated my own sets of translations in the languages
            i'm most familiar with.
            <br />
            <br />
            feel free to look at my github @ jadyhome 👋
          </h2>
        </div>
      </div>

      <div className="comment-form">
        <form onSubmit={handleSubmit}>
          comment form in process
          <input placeholder="name" onChange={handleName} />
          <input placeholder="comment" onChange={handleComment} />
          <button type="submit" className="create-button">
            submit
          </button>
        </form>
      </div>

      <div className="allcomments">
        {allComment.map((comment) => (
          <CardThree name={comment.name} comment={comment.comment} />
        ))}
      </div>
    </div>
  );
};

export default About;
