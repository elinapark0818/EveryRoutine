const { user } = require('../../models');

module.exports = {

  // TODO: setting token !
  // TODO: error catch!
  // TODO: edit API documents
  // TODO: profile img ..? string?

  users: {
    get: async (req, res) => {
      // console.log(models);
      user.findAll().then((data) => res.status(200).json(data));  
    }    
  },

  // check user in db by email
  signupCheck: {
    post: async (req, res) => {
      // email 받아오기
      const { email } = await req.body;

      // email data 있는지 확인하기
      const findUser = await user.findOne({ where: { email}})
      if(!findUser) {
        return res.status(200).json({ message: "No match exists. you can make a new ID" });
      } else {
        return res.status(409).json({ message: "Request denied. the same email exists" });
      }

    }
  },

  // signup, send token
  signup: {
    post: async (req, res) => {      
      // email, password, nicname, profile 받아오기
      const { email, password, nickname, profile } = req.body;
      // nickname data는 unique한 값으로 설정 -> 중복하용 막기
      const addedNickname = await user.findOne({ where: { nickname } })

      // default로 필요한 데이터 받아왔는지 확인 하여 데이터 DB에 넣어주기
      if(!email || !password || !nickname ) {
        return res.status(400).json({ message: "Please fill in all required spaces"})
      } else {
        // nickname data는 unique한 값으로 설정 -> 중복하용 막기
        if(addedNickname) {
          return res.status(400).json({ message: "Please use a different Nickname" })
        } else {
          // TODO: profile img 받아오는거 추가하기
          user.create({ email, password, nickname})
          return res.status(201).json({ message: "Successfully created" })  
        } 
      }
    }
  },

  // resign, clear cookie?
  resign: {
    post: async (req, res) => {
      // 이메일과 비밀번호 받아서 삭제 요청 보내기
      const { email, password } = await req.body;
      const findUser = await user.findOne({ where: {email, password} })

      if(!email || !password) {
        // 이메일과 패쓰워드를 모두 받지 못하면 탈퇴 불가
        return res.status(400).json({ message: "Please fill in all required spaces"})
      } else {
        if(!findUser) {
          // 이메일과 비번을 찾지 못한다 -> 제대로 기입을 안함
          return res.status(400).json({ message: "incorrect ID or password" })
        } else {
          // 유저 정보 삭제하기
          // TODO: 토큰내용 삭제 하기
          user.destroy({ where: { email, password }})
          return res.status(200).json({ message: "Successfully account deleted"})
        }
      }
    }
  },

  // send token for login
  login: {
    post: async (req, res) => {
      // 로그인을 위한 이메일, 패스워드 받기
      const { email, password } = await req.body;
      const findUser = await user.findOne({ where: {email, password} })

      if(!email || !password) {
        // 이메일과 패쓰워드를 모두 받지 못하면 로그인 불가
        return res.status(400).json({ message: "Please fill in all required spaces"})
      } else {
        if(!findUser) {
          // 등록되지 않은 아이디입니다 -> 현재 system에는 쓰이지 않는다.
          return res.status(400).json({ message: "Not registered user" })
        } else {
          // TODO: 로그인 성공시 토큰 넘기기
          return res.status(200).json({ message: "Successfully logged in" })
        }
      }
    }
  },

  // clear cookie for logout
  logout: {
    get: async (req, res) => {
      try {
        // TODO: clear cookie
        return res.status(200).json({ message: "Successfully logged out"})
      } catch {
        return res.status(500).json({ message: "Failed logged out"})
      }
    }
  },

  // send my page data
  userInfo: {
    get: async (req, res) => {
      // TODO: token을 이용하여 사용자 email 가져오기
      // test: pramas로 테스트 하기
      const userEmail = await req.params.email;

      try {
        if(userEmail) {
          const userInfo = await user.findOne({ where: { email : userEmail}});
          if(!userInfo) {
            return res.status(400).json({ message: "Bad request" })
          } else {
            return res.status(200).json({ data: userInfo, message: "Success. you can get your informations"});
          }
        }  
      } catch {
        return res.status(500).json({ message: "Bad request" })
      }
    }
  },

  editUserInfo: {
    post: async (req, res) => {

    }
  }


};