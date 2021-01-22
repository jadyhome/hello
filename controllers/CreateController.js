const { Create } = require("../models");

const CreateTranslation = async (req, res) => {
  try {
    const { from, to, phrases, translation, romanization } = req.body;
    const newCreate = await Create.create({
      from,
      to,
      phrases,
      translation,
      romanization,
    });
    res.send(newCreate);
  } catch (error) {
    throw error;
  }
};

const GetAllCreate = async (req, res) => {
  try {
    const getCreate = await Create.findAll();
    res.send(getCreate);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateTranslation,
  GetAllCreate,
};
