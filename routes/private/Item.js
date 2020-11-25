const router = require('express').Router();
const Item = require('../../model/Item');


//Ajouter un produit
router.post('/produit', async (req, res) => {
    
    //Check if user already exist
    const itemExist = await Item.findOne({ name: req.body.name });
    if (itemExist) return res.status(400).send('Cette éléments existe deja dans la base de donnée');

    //Create new item
    const item = new Item({
        name: req.body.name,
        category: req.body.category,
        gender: req.body.gender,
        brand: req.body.brand,
        s: req.body.s,
        m: req.body.m,
        l: req.body.l,
        xl: req.body.xl,
        unique: req.body.unique,
        price: req.body.price,
        image: req.body.image,
        description: req.body.description
    });
    try {
        const savedItem = item.save();
        res.send('votre produit à bien été ajouté');
    }catch(err){
        if(err){
            res.status(400).send(err)
        }
    }
});

router.delete('/produit/delete', async (req, res) => {
    try {
        const removeItem = await Item.deleteOne({ _id: req.body.id });
        res.send('Element supprimé')
    }catch(err){
        if(err){
            res.status(400).send(err)
        }
    }
});

router.patch('/produit/update', async(req,res) => {
    try{
    const updatedItem = await Item.updateOne({_id : req.body.id}, {$set: req.body})
    res.json(updatedItem)
    }catch(err){
        res.json({message: err})
    }
})

module.exports = router;