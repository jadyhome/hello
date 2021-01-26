const { Comment } = require("../models");

const CreateComment = async (req, res) => {
  try {
    const { name, comment } = req.body;
    const newComment = await Comment.create({
      name,
      comment,
    });
    res.send(newComment);
  } catch (error) {
    throw error;
  }
};

const GetAllComments = async (req, res) => {
  try {
    const getComments = await Comment.findAll();
    res.send(getComments);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  CreateComment,
  GetAllComments,
};
