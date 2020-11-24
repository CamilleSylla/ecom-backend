const router = require('express').Router();
const Orders = require('../../model/Order');
const Item = require('../../model/Item');


//Gerer le stock

router.patch('/produit/stock', async(req,res) => {
    //Manage Stock
    try{
            req.body.articles.forEach( async (item, i )=> {
                const Find = await Item.findOne({_id: item._id});
                console.log(Find);
                const updatedItem = await Item.updateOne({_id : item._id}, {$set: {
                    [item.size]: Find[item.size]-[item.quantity]
                }})
                res.json(true)
            })
    }catch(err){
        res.json({message: err})
    }
})

//Ajouter un produit
router.post('/newOrders', async (req, res) => {

    //Create new order
    const orders =  new Orders({
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        client_id: req.body.client_id,
        email: req.body.email,
        adresse: req.body.adresse,
        city: req.body.city,
        articles: req.body.articles,
        total: req.body.total,
    });
    try {
        const savedOrders = await orders.save();
        res.send('Votre commande a bien été prise en compte' +" " + savedOrders);
    }catch(err) {
        res.send(err)
    }
    
});
router.get('/orders', (req,res) => {
    Orders.find(function(err, orders){
        if(err){
            res.send(err)
        }
        res.json(orders)
    })
})


module.exports = router;