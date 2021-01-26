const Router = require("express").Router();
const controller = require("../controllers/CommentController");

Router.post("/newcomment", controller.CreateComment);
Router.get("/getcomments", controller.GetAllComments);

module.exports = Router;
