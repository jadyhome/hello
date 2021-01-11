require("dotenv").config();
const { Input, Output, Languages, Translation } = require("../models");
const { Translate } = require("@google-cloud/translate").v2;

const TranslateText = async (req, res) => {
  const user_input = req.body.text;
  try {
    const user_language = await Languages.findByPk(req.params.language_id);

    let translate = new Translate({
      key: process.env.API_KEY,
    });
    let [translation] = await translate.translate(
      user_input,
      user_language.dataValues.code
    );
    let newInput = await Input.create({
      languagesId: req.params.language_id,
      text: user_input,
    });
    let newOutput = await Output.create({
      languagesId: req.params.language_id,
      text: translation,
    });
    let newRecord = await Translation.create({
      input_id: newInput.dataValues.id,
      output_id: newOutput.dataValues.id,
    });
    res.send({ translation, newInput, newOutput, newRecord });
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
  ListLanguages,
};
