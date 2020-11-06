const router = require('express').Router();
const Item = require('../model/Item');

router.get('/publicItem', (req,res) => {
    Item.find(function(err, item){
        if(err){
            res.send(err)
        }
        res.json(item)
    })
})

module.exports = router;