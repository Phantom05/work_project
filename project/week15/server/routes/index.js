var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Hello world' });
});


router.get('/login', function (req, res, next) {
  res.render('index', { title: 'Login page' });
});

router.post('/login', function (req, res, next) {
  console.log('login post in');
  console.log(req.body, '클라이언트로부터 받은 데이터');
  console.log(req.body.username);
  console.log(req.body.password);
  // data 통신이 일어나고 isSuccessLogin변수로 데이터베이스 값을 가져왔는지 못가져왔는지 확인해서 넣어줍니다.
  const isSuccessLogin = true;
  let data;
  if (isSuccessLogin) {
    data = {
      result: 1,
      profile:{
        name:"최율겸",
        age:27,
        hobby:"coding"
      }
    }
  } else {
    data = {
      result: 0
    }
  }
  res.json(data)
  // res.render('index', { title: 'Login page' });
});

module.exports = router;
