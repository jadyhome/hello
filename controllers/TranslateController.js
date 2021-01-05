require("dotenv").config();
const { Input, Output, Languages, Translation } = require("../models");
const { Translate } = require("@google-cloud/translate").v2;

const TranslateText = async (req, res) => {
  const user_input = req.body.text;
  const user_language = req.body.target;
  try {
    let translate = new Translate({
      key: process.env.API_KEY,
    });
    let [translation] = await translate.translate(user_input, user_language);
    console.log(translation);
    let newInput = await Input.create({
      languagesId: req.params.language_id,
      text: user_input,
    });
    let newOutput = await Output.create({
      languagesId: req.params.language_id,
      text: translation,
    });
    // let newRecord = await Translation.create({});
    console.log(newInput);
    console.log(newOutput);
    // console.log(record);
    res.send([translation], newInput, newOutput);
  } catch (error) {
    throw error;
  }
};

const RecordTranslations = async (req, res) => {
  const input_id = req.params.input_id;
  const output_id = req.params.output_id;
  try {
    let record = await Translation.create({
      input_id,
      output_id,
    });
    res.send(record);
  } catch (error) {
    throw error;
  }
};

const ListLanguages = async (req, res) => {
  try {
    const languages = await Languages.findAll();
    res.send(languages);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  TranslateText,
  RecordTranslations,
  ListLanguages,
};
