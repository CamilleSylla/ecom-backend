const router = require('express').Router();
const Orders = require('../../model/Order');


//Ajouter un produit
router.post('/orders', (req, res) => {
    
    //Create new item
    const orders = new Orders({
        name: req.body.name,
        client_id: req.body.client_id,
        articles: req.body.articles,
        total: req.body.price,
    });
    try {
        const savedOrders = orders.save();
        res.send('Votre commande a bien été prise en compte');
    }catch(err){
        if(err){
            res.status(400).send(err)
        }
    }
});

module.exports = router;