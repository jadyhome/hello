const { Input } = require("../models");

const GetInputTranslations = async (req, res) => {
  try {
    const translations = await Input.findAll();
    res.send(translations);
  } catch (error) {
    throw error;
  }
};

const DeleteInputTranslations = async (req, res) => {
  try {
    await Input.destroy({
      where: {
        id: req.params.input_id,
      },
    });
    res.send({ message: `Input #${req.params.input_id} has been deleted.` });
  } catch (error) {
    throw error;
  }
};

module.exports = {
  GetInputTranslations,
  DeleteInputTranslations,
};
