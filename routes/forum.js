var express = require('express');
var router = express.Router();
const forumController = require('../controllers/forum');
router.get('/', forumController.getForums);
router.post('/', forumController.addForum);
router.delete('/:_id', forumController.deleteForum);
router.put('/:_id', forumController.updateForum);
module.exports = router;
