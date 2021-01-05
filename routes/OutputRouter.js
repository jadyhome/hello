const Router = require("express").Router();
const controller = require("../controllers/OutputController");

Router.get("/getoutput_translations", controller.GetOutputTranslations);
Router.delete("/deleteoutput/:output_id", controller.DeleteOutputTranslations);

module.exports = Router;
