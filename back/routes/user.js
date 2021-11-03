const express = require("express");
const router = express.Router();
const { User } = require("../models");
const bcrypt = require("bcrypt");

//User.create()는 비동기함수
//비동기 순서 맞춰주기 위해서 (res.json()이 먼저 실행되면 안된다)
//async 쓴다
router.post("/", async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    if (exUser) {
      return res.status(403).send("이미 사용중인 아이디입니다");
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      email: req.body.email,
      nickname: req.body.nickname,
      password: hashedPassword,
    });
    res.status(200).send("ok");
  } catch (error) {
    console.error(error);
    //한방에 next()로 모아서 처리??
    next(error); //status 500번대
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const exUser = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    console.log("정체", exUser.dataValues.password);
  } catch (error) {
    console.error(error);
    next(error);
  }
});

module.exports = router;
