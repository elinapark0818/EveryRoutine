const { users } = require('../../models');

module.exports = {
  users: {
    get: (req, res) => {
      // console.log(models);
      users.findAll().then((data) => res.status(200).json(data));
      
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
