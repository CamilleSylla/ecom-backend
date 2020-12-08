const router = require('express').Router();
const Pro = require('../model/Pers');


router.get('/projects', (req,res) => {
    Pro.find(function(err, projects){
        if(err){
            res.send(err)
        }
        res.json(projects)
    })
})


module.exports = router;