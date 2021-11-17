const express = require("express");
const cors = require("cors");

const cookieParser = require("cookie-parser");
const session = require("express-session");

const passport = require("passport");
const passportConfig = require("./passport");
const dotenv = require("dotenv");

const morgan = require("morgan");

const app = express();

//시퀄라이즈 가져오기
const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

//cors해결책 - 1. 직접
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.header("Access-Control-Allow-Credentials", true);
//   return next();
// });

app.use(morgan("dev"));
//cors해결책 - 2. 라이브러리
app.use(
  cors({
    origin: "http://localhost:3060",
    //request header에 쿠키 자동으로 넣어주는 옵션
    //front에서는 withCredentials 옵션
    credentials: true,
  })
);

passportConfig();
dotenv.config();

//req.body() 안에 데이터를 넣어주는 역할
//json형식의 데이터를 넣어줌
app.use(express.json());
//form형식의 데이터를 넣어줌
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);
app.use(passport.initialize());
app.use(passport.session());

// app.use("/api/users", require("./routers/users"));
app.use("/posts", require("./routes/posts"));
app.use("/post", require("./routes/post"));
app.use("/user", require("./routes/user"));

app.listen(8080, () => {
  console.log("환영합니다 백서버");
});
