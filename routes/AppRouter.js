const Router = require("express").Router();
const TranslateRouter = require("../routes/TranslateRouter");
const InputRouter = require("../routes/InputRouter");
const OutputRouter = require("../routes/OutputRouter");
const LanguageRouter = require("../routes/LanguageRouter");
const CreateRouter = require("../routes/CreateRouter");
const CommentRouter = require("../routes/CommentRouter");

Router.use("/translate", TranslateRouter);
Router.use("/input", InputRouter);
Router.use("/output", OutputRouter);
Router.use("/language", LanguageRouter);
Router.use("/create", CreateRouter);
Router.use("/comment", CommentRouter);

module.exports = Router;
