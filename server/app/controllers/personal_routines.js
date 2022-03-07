const { user, user_routine, user_cal, march22_date } = require("../../models");

module.exports = {
  user_routine: {
    get: async (req, res) => {
      const { date } = req.body;
      const accessToken = await req.headers.authorization;
      const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);

      const dateInfo = await march22_date.findAll({
        where: { date: { [Op.lte]: date } },
        limit: 15,
      });

      console.log(dateInfo);

      const thisDateRoutineDetails = await user_cal.findOne({
        where: { date },
      });
      const thisDateRoutineList = await thisDateRoutineDetails.findOne({
        where: { email },
      });

      const findUser = await user.findOne({ where: { email } });
      if (!findUser) {
        return res.status(203).json({ message: "Bad request : user error" });
      } else if (!date) {
        return res.status(203).json({ message: "Bad request : date error" });
      } else {
        // 오늘 날짜 (포함 이전 15일), 오늘 날짜의 루틴 리스트 (체크여부 포함) => 객체 형태
        return res.status(200).json({
          dateInfo,
          thisDateRoutineDetails,
          thisDateRoutineList,
          message: "Success. you can see your personal routines of that date",
        });
      }
    },

    post: async (req, res) => {
      const { list, date } = req.body; //list는 string들의 array형식
      const accessToken = await req.headers.authorization;
      const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);

      const uncheckedArray = new Array(list.length).fill(0);
      const updatedDateInfo = march22_date.findAll({
        where: { date: { [Op.gte]: date } },
      });

      const findUser = await user.findOne({ where: { email } });
      if (!findUser) {
        return res.status(204).json({ message: "Bad request : user error" });
      } else if (!date) {
        return res.status(204).json({ message: "Bad request : date error" });
      } else {
        await user_routine.update(
          { list },
          { where: { date: updatedDateInfo.date } }
        );
        // list를 오늘 날짜 이후 날짜에 전부 덮어씌운 뒤에 list 길이와 같은 unchecked array와 함께 반환 => 객체 형태
        return res.status(200).json({
          uncheckedArray,
          message: "A personal routine successfully created",
        });
      }
    },

    patch: async (req, res) => {
      const { daily_check, date } = req.body; //daily_check는 list 길이와 같은 array

      const accessToken = await req.headers.authorization;
      const { email } = jwt.verify(accessToken, process.env.ACCESS_SECRET);

      const findUser = await user.findOne({ where: { email } });
      if (!findUser) {
        return res.status(204).json({ message: "Bad request : user error" });
      } else if (!daily_check) {
        return res.status(203).json({ message: "Bad request. No check list" });
      } else if (!date) {
        return res.status(203).json({ message: "Bad request : date error" });
      } else {
        await user_cal.update({ daily_check }, { where: { date } });
        // { checked: [ 0, 1, 0, 0, 0 ], contents: [ "물 2L 마시기", "스트레칭 하기" ] }
        //date 들어온 날짜에 daily_check array를 들어온 바디로 덮어 씌워서 반환 => 객체형태
        return res.status(200).json({ message: "Successfully Modified" });
      }
    },
  },
};
