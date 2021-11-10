const express = require("express");
const router = express.Router();
const { User, Post } = require("../models");
const bcrypt = require("bcrypt");
const passport = require("passport");
const db = require("../models");

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

//미들웨어 확장
//passport.authenticate가 미들웨어를 사용하기 위해 확장하는 방법
router.post("/login", (req, res, next) => {
  //passport/local.js 전략을 실행
  passport.authenticate("local", (err, user, info) => {
    //(err,user,info)는 done(서버에러, 성공, 클라이언트에러)다
    if (err) {
      console.error(err);
      next(err);
    }

    if (info) {
      //401 허가되지 않음 / 403 금지
      //출처: http 상태코드
      return res.status(401).send(info.reason);
    }

    //성공시 '패스포트 로그인' 실행
    // passport/index.js
    return req.login(user, async (loginErr) => {
      if (loginErr) {
        console.error(loginErr);
        return next(loginErr);
      }
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attribute: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
          },
          {
            model: User,
            as: "Followings",
          },
          {
            model: User,
            as: "Followers",
          },
        ],
      });

      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post("/user/logout", (req, res, next) => {
  req.logout();
  req.session.destroy();
  res.send("ok");
});

module.exports = router;
