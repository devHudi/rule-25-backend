const express = require('express');
const router = express.Router();

const verifyJWT = require('../middlewares/verifyJWT');

const user = require('../controllers/user');

router.post('/', user.create);
router.post('/auth', user.auth);
router.get('/:id', verifyJWT, user.findOne);
router.get('/:id/followers', verifyJWT, user.getFollowers);
router.get('/:id/followings', verifyJWT, user.getFollowings);

module.exports = router;
