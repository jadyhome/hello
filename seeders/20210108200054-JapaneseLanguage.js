"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("japanese_languages", [
      {
        phrases: "Hello",
        translation: "こんにちは",
        romanization: "Kon'nichiwa",
      },
      {
        phrases: "Nice to meet you",
        translation: "はじめまして",
        romanization: "Hajimemashite",
      },
      {
        phrases: "My name is ___.",
        translation: "私 の 名前 は ___ です.",
        romanization: "Watashi no namae wa ___ desu.",
      },
      {
        phrases: "Can you speak English?",
        translation: "英語 が 話せますか?",
        romanization: "Eigo ga hanasemasuka?",
      },
      {
        phrases: "Good Morning, Good Afternoon, Good Evening, Good Night",
        translation: "おはよう, こんにちは, こんばんは, おやすみなさい",
        romanization: "Ohayō, Kon'nichiwa, Konbanwa, Oyasumi nasai",
      },
      {
        phrases: "One, Two, Three, Four, Five, Six, Seven, Eight, Nine, Ten",
        translation:
          "いち (一), に (二), さん (三), よん (四), ご (五), ろく (六), なな (七), はち (八), きゅう (九), じゅう (十)",
        romanization: "Ichi, Ni, San, Yon, Go, Roku, Nana, Hachi, Kyuu, Jyuu",
      },
      {
        phrases: "How much is this?",
        translation: "これ は いくら ですか?",
        romanization: "Kore wa ikura desuka?",
      },
      {
        phrases: "I want to buy this",
        translation: "これ　は　ください",
        romanization: "Kore wa kudasai",
      },
      {
        phrases: "Can I order?",
        translation: "ご注文　を　しても　いいですか?",
        romanization: "Go chūmon wo shitemo iidesuka?",
      },
      {
        phrases: "Check, please",
        translation: "お勘定　を　お願いします",
        romanization: "Okanjō wo onegaishimasu",
      },
      {
        phrases: "Thank you",
        translation: "ありがとう　ございます",
        romanization: "Arigatou gozaimasu",
      },
      {
        phrases: "You are welcome",
        translation: "どういたしまして",
        romanization: "Dō　itashimashite",
      },
      {
        phrases: "I would like water / tea / coffee please",
        translation: "水 / お茶 / コーヒー を お願いします",
        romanization: "Mizu / Ocha / Kōhī wo onegaishimasu",
      },
      {
        phrases: "Where is the bathroom?",
        translation: "トイレ　は　どこ ですか?",
        romanization: "Toire wa doko desuka?",
      },
      {
        phrases: "Excuse me...",
        translation: "すみません...",
        romanization: "Sumimasen...",
      },
      {
        phrases: "I am sorry",
        translation: "ごめんなさい",
        romanization: "Gomen'nasai",
      },
      {
        phrases: "Yes / No",
        translation: "はい / いいえ",
        romanization: "Hai / īe",
      },
      {
        phrases: "Sorry, I don't understand",
        translation: "すみません, わかりません",
        romanization: "Sumimasen, wakarimasen",
      },
      {
        phrases: "Can you help me please?",
        translation: "手伝って　くれませんか?",
        romanization: "Tetsudatte kuremasenka?",
      },
      {
        phrases: "I'm hungry / I'm sleepy / I'm tired",
        translation: "腹へた / 眠い / 疲れた",
        romanization: "Haraheta / Nemui / Tsukareta",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("japanese_languages");
  },
};
