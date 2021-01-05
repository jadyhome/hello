const Router = require("express").Router();
const controller = require("../controllers/InputController");

Router.get("/getinput_translations", controller.GetInputTranslations);
Router.delete("/deleteinput/:input_id", controller.DeleteInputTranslations);

module.exports = Router;
