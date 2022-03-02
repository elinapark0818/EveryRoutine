const express = require('express');
// const indexRouter = require('./routes');  
const cors = require('cors');
const app = express();
const port = 80;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// app.use('/', indexRouter);  // 라우터로 이동함

module.exports = app.listen(port, () => {
  console.log(`      🚀 Server is starting on ${port}`);
});
