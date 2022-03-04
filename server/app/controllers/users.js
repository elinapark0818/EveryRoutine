const db = require("../../models/users");

module.exports = {
  users: {
    get: (req, res) => {
      db.findAll().then((data) => res.status(200).json(data));
      console.log(users);
    },
    // post: (req, res) => {
    //   utils.getUrlTitle(req.body.url, (err, title) => {
    //     url
    //       .create({ url: req.body.url, title: title })
    //       .then((data) => res.status(201).json(data));
    //   });

    // TODO: 요청에 따른 적절한 응답을 돌려주는 컨트롤러를 작성하세요.
    // },
  },
};
