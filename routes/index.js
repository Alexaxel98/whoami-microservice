var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    
    var headers={}; 
    headers = {userInfo: req.headers['user-agent'].match(/\((.*?)\)/)[0], userLang: req.headers['accept-language'].split(",")[0], userIP: req.headers['x-forwarded-for']}; 
    
  console.log(req.headers['user-agent']);
  console.log(req.headers['accept-language']);
  console.log(req.headers['x-forwarded-for']);
  
  res.render('index',{info:headers.userInfo,language:headers.userLang, ip:headers.userIP});
});



module.exports = router;
