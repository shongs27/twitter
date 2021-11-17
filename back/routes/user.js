const express = require("express");
const router = express.Router();
const { User, Post } = require("../models");
const bcrypt = require("bcrypt");
const passport = require("passport");
const { isNotLoggedIn, isLoggedIn } = require("./middlewares");

//새로고침 할때마다 get을 보냄
router.get("/", async (req, res, next) => {
  try {
    if (req.user) {
      const fullUserWithoutPassword = await User.findOne({
        where: { id: req.user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
            //포스트 다 가져오면 용량 엄청나니깐 id만 가져오자
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followers",
            attributes: ["id"],
          },
        ],
      });
      res.status(200).json(fullUserWithoutPassword);
    } else res.status(200).json(null);
  } catch (error) {
    console.error(error);
    next("자동 로그인이 안됩니다");
  }
});

//미들웨어 확장
//passport.authenticate가 미들웨어를 사용하기 위해 확장하는 방법
router.post("/login", isNotLoggedIn, (req, res, next) => {
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

      //'user' 재활용 안하고 다시 'user'찾아서 include, exclude 포함시켜줌
      const fullUserWithoutPassword = await User.findOne({
        where: { id: user.id },
        attributes: {
          exclude: ["password"],
        },
        include: [
          {
            model: Post,
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followings",
            attributes: ["id"],
          },
          {
            model: User,
            as: "Followers",
            attributes: ["id"],
          },
        ],
      });

      return res.status(200).json(fullUserWithoutPassword);
    });
  })(req, res, next);
});

router.post("/logout", isLoggedIn, (req, res) => {
  req.logout();
  req.session.destroy();
  res.send("ok");
});

//User.create()는 비동기함수 - 순서 동기화하기 위해 async await
router.post("/", isNotLoggedIn, async (req, res, next) => {
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

router.patch("/nickname", isLoggedIn, async (req, res, next) => {
  try {
    // update(update항목, 조건)
    await User.update(
      {
        nickname: req.body.nickname,
      },
      {
        where: { id: req.user.id },
      }
    );
    res.status(200).json({ nickname: req.body.nickname });
  } catch (err) {
    console.error(err);
    next(err);
  }
});

module.exports = router;
