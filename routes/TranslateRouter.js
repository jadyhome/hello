const Router = require("express").Router();
const controller = require("../controllers/TranslateController");

Router.post("/translatetext", controller.TranslateText);
Router.get("/getlanguages", controller.ListLanguages);
Router.get("/gettranslations", controller.GetTranslations);
Router.delete("/:input_id", controller.DeleteInputTranslations);
Router.delete("/:output_id", controller.DeleteOutputTranslations);

module.exports = Router;
