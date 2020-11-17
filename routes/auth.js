const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const { registerValidation, loginValidation } = require('../validation');


router.post('/register', async (req, res) => {
    //VALIDATE DATA BEFORE 
    const { error } = registerValidation(req.body);
    if (error) return res.send(error.details[0]);

    //Check if user already exist
    const emailExist = await User.findOne({ email: req.body.email });
    if (emailExist) return res.status(400).send('Email already exist');

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);


    //Create new user
    const user = new User({
        last_name: req.body.last_name,
        first_name: req.body.first_name,
        adresse: req.body.adresse,
        city: req.body.city,
        gender: req.body.gender,
        email: req.body.email,
        password: hashPassword,
    });
    try {
        const savedUser = user.save();
        res.send({ user: user });
    } catch (err) {
        res.status(400).send(err)
    }
});

//Login
router.post('/login', async (req, res) => {

    //VALIDATE DATA BEFORE 
    const { error } = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    //Check if the email exist
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.status(400).send('Aucun compte associer a cette adresse mail');
    //PASSWORD IS CORRECT
    const validPass = await bcrypt.compare(req.body.password, user.password);
    if (!validPass) return res.status(400).send('Mauvais mot de passe');

    
    //Create and assign a token
    const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
    res.header('authtoken', token).send(user);

})


module.exports = router;