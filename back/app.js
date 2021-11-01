const express = require("express");
const app = express();
const postRouter = require("./routes/post");

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

app.use("/post", postRouter);
// app.use("/api/users", require("./routers/users"));
app.listen(8080, () => {
  console.log("환영합니다 백서버");
});
