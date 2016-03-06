var express = require('express');
var router = express.Router();
var handles = require('../handlers/expenses')

router.get("/", handles.list);

module.exports = router;