const express = require("express");
const router = express.Router();
const { Post, Comment } = require("../models");
const { isLoggedIn } = require("./middlewares");

router.post("/", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.create({
      content: req.body.content,
      UserId: req.body.userId,
    });
    //꼭 확인해보자
    console.log("post.create 한 것", post);
    res.status(201).json(post);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

router.post("/:postId/comment", isLoggedIn, async (req, res, next) => {
  try {
    const post = await Post.findOne({
      where: { id: req.params.postId },
    });
    if (!post) {
      return res.status(403).send("존재하지 않는 게시글입니다");
    }
    const comment = await Comment.create({
      content: req.body.content,
      PostId: req.params.postId,
      UserId: req.body.userId, //deserializeUser 저장되있는 req.user
    });
    res.status(201).json(comment);
  } catch (error) {
    console.error(error);
    next(error);
  }
});
module.exports = router;
