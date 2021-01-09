const Router = require("express").Router();
const TranslateRouter = require("../routes/TranslateRouter");
const InputRouter = require("../routes/InputRouter");
const OutputRouter = require("../routes/OutputRouter");
const LanguageRouter = require("../routes/LanguageRouter");

Router.use("/translate", TranslateRouter);
Router.use("/input", InputRouter);
Router.use("/output", OutputRouter);
Router.use("/language", LanguageRouter);

module.exports = Router;
