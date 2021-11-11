const passport = require("passport");
const local = require("./local");
const { User } = require("../models");

//설정

module.exports = () => {
  //req.login 로그인 첨할때 실행
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });
  //로그인 한 이후부터 지속적으로 실행
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user); //req.user에 정보가 들어가 있음
    } catch (error) {
      console.error(error);
      done(error);
    }
  });
};

local();
