const Router = require("express").Router();
const TranslateRouter = require("../routes/TranslateRouter");
const InputRouter = require("../routes/InputRouter");
const OutputRouter = require("../routes/OutputRouter");

Router.use("/translate", TranslateRouter);
Router.use("/input", InputRouter);
Router.use("/output", OutputRouter);

module.exports = Router;
