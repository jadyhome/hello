require("dotenv").config();
const { Input, Output, Languages, Translation } = require("../models");
const { Translate } = require("@google-cloud/translate").v2;

const GetOutputTranslations = async (req, res) => {
  try {
    const translations = await Output.findAll();
    res.send(translations);
  } catch (error) {
    throw error;
  }
};

const DeleteOutputTranslations = async (req, res) => {
  try {
    await Output.destroy({
      where: {
        id: req.params.output_id,
      },
    });
    res.send({ message: `Output #${req.params.output_id} has been deleted.` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetOutputTranslations,
  DeleteOutputTranslations,
};
