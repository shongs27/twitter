const passport = require("passport");
const { Strategy: LocalStrategy } = require("passport-local");
const { User } = require("../models");
const bcrypt = require("bcrypt");

module.exports = () => {
  passport.use(
    new LocalStrategy(
      //req.body에 내용 - 객체형식
      {
        usernameField: "email", //req.body.email
        passwordField: "password", //req.body.password
      },
      //구체적인 전략 - 함수형식
      //비동기 함수는 무조건 async처리와 try로 오류잡자
      async (email, password, done) => {
        try {
          const user = await User.findOne({
            where: { email },
          });

          //유저없으면
          if (!user) {
            //응답을 보내지 않고 우선 done으로 결과를 판단해준다
            //서버 에러, 성공시, 클라이언트 에러(보낸사람에러)
            // done실행되면 /routes/user에 authenticate 콜백함수 재실행
            return done(null, false, { reason: "존재하지 않는 사용자입니다" });
          }

          //유저있으면 비번비교
          const result = await bcrypt.compare(password, user.password);
          if (result) {
            //같은유저
            return done(null, user);
            //다른유저
          } else return done(null, false, { reason: "비밀번호가 틀렸습니다" });
        } catch (error) {
          return done(error);
        }
      }
    )
  );
};
