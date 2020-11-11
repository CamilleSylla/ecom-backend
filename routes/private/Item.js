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
        sizes: req.body.sizes,
        price: req.body.price,
        image: req.body.image
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
        const removeItem = await Item.remove({ _id: req.body.id });
        res.send('Element supprimé')
    }catch(err){
        if(err){
            res.status(400).send(err)
        }
    }
})

module.exports = router;