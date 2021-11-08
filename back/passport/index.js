const passport = require("passport");
const { User } = require("../models");
const local = require("./local");

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  //한번 로그인 되고 매번 실행되는 값
  passport.deserializeUser(async (id, done) => {
    try {
      const user = await User.findOne({ where: { id } });
      done(null, user); //req.user
    } catch (error) {
      console.error(error);
      done(error);
    }
  });
};

local();
