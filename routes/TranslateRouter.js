const Router = require("express").Router();
const controller = require("../controllers/TranslateController");

Router.post("/translatetext/:language_id", controller.TranslateText);
Router.post("/record/:input_id/:output_id", controller.RecordTranslations);

Router.get("/getlanguages", controller.ListLanguages);

module.exports = Router;
