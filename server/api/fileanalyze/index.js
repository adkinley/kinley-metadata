'use strict';

var express = require('express');
var controller = require('./fileanalyze.controller');
var multer = require('multer');
var router = express.Router();
var upload = multer({'dest':'./uploads'});

router.get('/', controller.index);
router.post('/',upload.single('upl'),  function(req, res) {

	var response = {"name":req.file.originalname,"size":req.file.size};

	return res.json(response);

});

module.exports = router;