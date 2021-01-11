import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-page">
      <div className="box-container">
        <div className="home-bar">
          <h1>hello</h1>
          <li>_</li>
          <li>❑</li>
          <li>x</li>
        </div>

        <div className="home-box">
          <div className="textbox">
            <p>
              Hallo Mirëdita ታዲያስ مرحبا নমস্কার Zdravo Здравей Bok Ahoj Hej
              Hallo Hello Saluton Tere Bula Terve Bonjour Hallo Γειά σου Aloha
              שלום नमस्ते Sziasztok Halo Dia dhuit Ciao こんにちは 안녕하세요
              안녕 ສະບາຍດີ Salve Sveiki Hallau Selamat tengahari Ħelow 你好 Kia
              ora байна үү ဟယ်လို Cześć Hei Olá Alo Здравствуйте Salut Hola
              Hujambo வணக்கம் สวัสดีคะ สวัสดีครับ Merhaba Salam Salom xin chào
              Mholweni Sawubona 👋
            </p>
          </div>
        </div>
      </div>

      <div className="div2">
        <div className="title">
          <h2>
            <em>
              mother–
              <br />
              tongue
            </em>
          </h2>
        </div>
        <div className="to-translate-page">
          {
            <Link to="/translate" className="click">
              click me
            </Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Home;
