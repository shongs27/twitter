const express = require("express");
const app = express();
const cors = require("cors");

const cookieParser = require("cookie-parser");
const session = require("session");
const passport = require("passport");

const passportConfig = require("./passport");
const dotenv = require("dotenv");
passportConfig();
dotenv.config();

//req.body() 안에 데이터를 넣어주는 역할
//json형식의 데이터를 넣어줌
app.use(express.json());
//form형식의 데이터를 넣어줌
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session());
app.use(passport.initialize());
app.use(passport.session());
app.use(
  session({
    saveUninitialized: false,
    resave: false,
    secret: process.env.COOKIE_SECRET,
  })
);

//cors해결책 - 1. 직접
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Methods", "GET, OPTIONS");
//   res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
//   res.header("Access-Control-Allow-Credentials", true);
//   return next();
// });

// 2. cors해결책 - 2. 라이브러리
app.use(
  cors({
    origin: "http://localhost:3060",
    credentials: true,
  })
);

const postRouter = require("./routes/post");
const userRouter = require("./routes/user");

//시퀄라이즈 가져오기
const db = require("./models");
db.sequelize
  .sync()
  .then(() => {
    console.log("db 연결 성공");
  })
  .catch(console.error);

app.get("/", (req, res) => {
  res.send("반갑습니다 get입니다");
});

app.post("/", (req, res) => {
  res.send("반갑습니다 post입니다");
});

// app.use("/api/users", require("./routers/users"));
app.use("/post", postRouter);
app.use("/user", userRouter);
app.listen(8080, () => {
  console.log("환영합니다 백서버");
});
