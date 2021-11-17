//하나만 바꾸는 post route와 달리
//여러개를 바꾸는 posts로 만든다

const express = require("express");
const router = express.Router();
const { Post, User, Image, Comment } = require("../models");

router.get("/", async (req, res, next) => {
  try {
    const posts = await Post.findAll({
      // 페이지네이션 방식 - LastID
      // where : { id: lastId}

      // 한번에 포스트들을 다 가져오는 것이 아니라
      // 부분으로 나누어서 가져오는 것
      limit: 10,
      order: [
        // 생성일을 기준으로 내림차순
        ["createdAt", "DESC"],
        // 댓글들도 정렬
        [Comment, "createdAt", "DESC"],
      ],
      //   offset: 100, // 101 ~ 110

      include: [
        {
          model: User,
          attributes: ["id", "nickname"],
        },
        {
          model: Image,
        },
        {
          model: Comment,
          include: [
            {
              model: User,
              attributes: ["id", "nickname"],
            },
          ],
        },
        {
          model: User, //좋아요 누른 사람
          as: "Likers",
          attribue: ["id"],
        },
      ],
    });
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
