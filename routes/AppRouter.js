const Router = require("express").Router();
const TranslateRouter = require("../routes/TranslateRouter");

Router.use("/translate", TranslateRouter);

module.exports = Router;
