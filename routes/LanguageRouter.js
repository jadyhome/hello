const Router = require("express").Router();
const controller = require("../controllers/LanguageController");

Router.get("/getko", controller.GetKo);
Router.get("/getja", controller.GetJa);
Router.get("/getzh", controller.GetZh);

module.exports = Router;
