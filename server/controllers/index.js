// const models = require('../models');

// module.exports = {
//   items: {
//     get: (req, res) => {
//       models.items.get((error, result) => {
//         if (error) {
//           res.status(500).send('Internal Server Error');
//         } else {
//           res.status(200).json(result);
//         }
//       });
//     },
//   },
//   orders: {
//     get: (req, res) => {
//       const userId = req.params.userId;
//       if(!userId) return res.status(400).json('너가 get요청 잘못했어1')
//       else {
//         // 모델에서 저장된 주문내역 자료 받아오기!
//         models.orders.get(userId, (error, result) => {
//           if (error) {
//             res.status(500).json('서버가 자료를 못주고있어..');
//           } else {
//             res.status(200).json(result);
//           }
//         })
//       }
//     },
//     post: (req, res) => {
//       const userId = req.params.userId;
//       // 클라이언트가 잘못된 요청을 했을 경우 400 상태코드를 응답으로 보낸다.
//       const { orders, totalPrice } = req.body;
//       if(!userId || !orders || !totalPrice) {
//         return res.status(400).json('너가 post요청 잘못했어1')
//       } else {
//         // 데이터 베이스에 주문 내역 저장하기. 서버 -> 데이터베이스 요청 보내기
//         // 해당 요청은 비동기 요청이기 때문에 비동기 처리를 해줘야한다.
//           // callback 함수를 이용하여 err, result 나눠 준다.
//         models.orders.post(userId, orders, totalPrice, (error, result) => {
//           if (error) {
//             // 해당에러는 서버의 문제이므로 에러 발생시 500번대 코드를 보낸다
//             res.status(500).json('서버에 에러가 생겼다');
//           } else {
//             // post 요쳥에 대한 성공이므로 201번 코드를 보낸다.
//             res.status(201).json(result);
//           }
//         })
//       }
//       // TODO: 요청에 따른 적절한 응답을 돌려주는 컨트롤러를 작성하세요.
//     },
//   },
// };
