const router = require('express').Router();
const Mail = require('../../model/Mail');


//Ajouter un produit
router.post('/mail', async (req, res) => {
    
    //Create new item
    const mail = new Mail({
        name: req.body.name,
        email: req.body.email,
        sujet: req.body.sujet,
        content: req.body.content,
    });
    try {
        const savedMail = mail.save();
        res.send('Merci pour votre message, nous repondrons dans les plus bref delais');
    }catch(err){
        if(err){
            res.status(400).send(err)
        }
    }
});
router.get('/mail/all', (req,res) => {
    Mail.find(function(err, mail){
        if(err){
            res.send(err)
        }
        res.json(mail)
    })
})

router.delete('/mail/delete', async (req, res) => {
    try {
        const removeMail = await Mail.deleteOne({ _id: req.body.id });
        res.send('Mail supprimé')
    }catch(err){
        if(err){
            res.status(400).send(err)
        }
    }
});

module.exports = router;