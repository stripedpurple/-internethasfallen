var express = require('express');
var router = express.Router();

function randomString(length, chars) {
  var result = '';
  for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
  return result;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { random:
    randomString('6', 'qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM1234567890')
   });
});

module.exports = router;
