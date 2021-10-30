const express = require("express");
const postRouter = require("./routes/post");

const app = express();

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
