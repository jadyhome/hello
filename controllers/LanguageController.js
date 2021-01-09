const {
  KoreanLanguage,
  JapaneseLanguage,
  ChineseLanguage,
} = require("../models");

const GetKo = async (req, res) => {
  try {
    const ko = await KoreanLanguage.findAll();
    res.send(ko);
  } catch (error) {
    throw error;
  }
};

const GetJa = async (req, res) => {
  try {
    const ja = await JapaneseLanguage.findAll();
    res.send(ja);
  } catch (error) {
    throw error;
  }
};

const GetZh = async (req, res) => {
  try {
    const zh = await ChineseLanguage.findAll();
    res.send(zh);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetKo,
  GetJa,
  GetZh,
};
