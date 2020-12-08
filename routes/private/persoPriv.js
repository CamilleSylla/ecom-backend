const router = require('express').Router();
const Pro = require('../../model/Pers');


//Ajouter un produit
router.post('/AddPro', async (req, res) => {

    //Create new item
    const pro = new Pro({
        id: req.body.id,
        name: req.body.name,
        duration: req.body.duration,
        type: req.body.type,
        start: req.body.start,
        goal: req.body.goal,
        image: req.body.image,
        link: req.body.link,
        git: req.body.git,
        finish: req.body.finish,
        problem: req.body.problem,
        tech: req.body.tech,
    });
    try {
        const savedPro = pro.save();
        res.send('Nouveau projet ajouté');
    } catch (err) {
        if (err) {
            res.status(400).send(err)
        }
    }
});

module.exports = router;