const add = require('./add');
const getAll = require('./getAll');
const getById = require('./getById');
const like = require('./like');
const router = require('express').Router();

router.use([add, getAll, getById, like]);

module.exports = router;