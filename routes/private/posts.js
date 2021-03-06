const router = require('express').Router();
const User = require('../../model/User');
const verify = require('../verifyToken');

router.get('/Dashboard', verify, (req,res) => {
    res.send(req.user);
    User.findById({_id: req.user})
})

module.exports = router;