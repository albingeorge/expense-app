var express = require('express');
var router = express.Router();
var expenseHandles = require('../handlers/expense')
var userHandles = require('../handlers/user')

router.post("/user/add", userHandles.add);
router.get("/user/list", userHandles.list);
router.get("/expense/add", expenseHandles.list);
router.get("/expense/list", expenseHandles.list);

module.exports = router;