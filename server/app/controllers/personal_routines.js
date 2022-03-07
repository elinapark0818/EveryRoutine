const { IGNORE } = require("sequelize/types/index-hints");
const { user, user_routine, user_cal } = require("../../models");

module.exports = {
  user_routine: {
    get: async (req, res) => {
      const { date } = req.body;
      const accessToken = await req.headers.authorization;

      const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);

      const findUser = await user.findOne({ where: { email } });
      if (!findUser) {
        return res.status(204).json({ message: "Bad request : user error" });
      } else if (!date) {
        return res.status(204).json({ message: "Bad request : date error" });
      } else {
        // 오늘 날짜 (포함 이전 15일), 오늘 날짜의 루틴 리스트 (체크여부 포함) => 객체 형태
        return res.status(200).json({
          message: "Success. you can see your personal routines of that date",
        });
      }
    },

    post: async (req, res) => {
      const { list, date } = req.body; //list는 string들의 array형식
      const accessToken = await req.headers.authorization;

      const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);

      const findUser = await user.findOne({ where: { email } });
      if (!findUser) {
        return res.status(204).json({ message: "Bad request : user error" });
      } else if (!date) {
        return res.status(204).json({ message: "Bad request : date error" });
      } else {
        // list를 오늘 날짜 이후 날짜에 전부 덮어씌운 뒤에 list 길이와 같은 unchecked array와 함께 반환 => 객체 형태
        return res
          .status(200)
          .json({ message: "A personal routine successfully created" });
      }
    },

    patch: async (req, res) => {
      const { daily_check, date } = req.body;

      const accessToken = await req.headers.authorization;

      const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);

      const findUser = await user.findOne({ where: { email } });

      if (!findUser) {
        return res.status(204).json({ message: "Bad request : user error" });
      } else if (!daily_check) {
      } else if (!date) {
      } else {
        //date 들어온 날짜에 daily_check array를 들어온 바디로 덮어 씌워서 반환 => 객체형태
        return res.status(200).json({ message: "Successfully Modified" });
      }
    },
  },
};
