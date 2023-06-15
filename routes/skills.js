var express = require('express');
var router = express.Router();

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

var skillsCtrl = require('../controllers/skills');

router.get('/', skillsCtrl.index);
router.get('/:id', skillsCtrl.show);


module.exports = router;
