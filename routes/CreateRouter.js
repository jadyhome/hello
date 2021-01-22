const Router = require("express").Router();
const controller = require("../controllers/CreateController");

Router.post("/newtranslation", controller.CreateTranslation);
Router.get("/createtranslations", controller.GetAllCreate);

module.exports = Router;
