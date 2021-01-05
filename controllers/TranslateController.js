require("dotenv").config();
const { Output } = require("../models");
const { Translate } = require("@google-cloud/translate").v2;

const TranslateText = async (req, res) => {
  const text = req.body.text;
  const target = req.body.target;
  try {
    let translate = new Translate({
      key: process.env.API_KEY,
    });
    let [translation] = await translate.translate(text, target);
    console.log(translation);
    res.send([translation]);
  } catch (error) {
    throw error;
  }
};

const ListLanguages = async (req, res) => {
  const target = req.body.target
  try {
    let translate = new Translate({
      key: process.env.API_KEY,
    })
    const [languages] = await translate.getLanguages(target)
    console.log("Languages:")
    languages.forEach((language) => console.log(language))
    res.send([languages])
  } catch (error) {
    throw error
  }
};

const GetTranslations = async (req, res) => {
  try {
    const translations = await Output.findAll();
    res.send(translations);
  } catch (error) {
    throw error;
  }
};

const DeleteInputTranslations = async (req, res) => {
  try {
    await Output.destroy();
  } catch (error) {
    throw error;
  }
};

const DeleteOutputTranslations = async (req, res) => {
  try {
    await Output.destroy();
  } catch (error) {
    throw error;
  }
};

module.exports = {
  TranslateText,
  ListLanguages,
  GetTranslations,
  DeleteInputTranslations,
  DeleteOutputTranslations,
};
