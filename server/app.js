const express = require("express");
// const { sequelize } = require("./models"); // db.sequelize
const app = express();
const userRouter = require("./app/routes/users");


app.set("port", process.env.PORT || 4000);
app.set("view engine", "html");

// sequelize
//   .sync({ force: false })
//   .then(() => {
//     console.log("데이터베이스 연결됨.");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", userRouter);

app.listen(app.get("port"), () => {
  console.log(app.get("port"), "번 포트에서 대기 중");
});
