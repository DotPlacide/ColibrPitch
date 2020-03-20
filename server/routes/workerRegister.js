const router = require('express').Router();
const {check , validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// worker model
const Worker = require('../models/Workers');


router.post('/' ,
    [
        check('fullName','please provide a name').not().isEmpty(),
        check('email','please provide a valid email').isEmail(),
        check('availability','your availability please ').not().isEmpty(),
        check('age','please provide the right age').not().isEmpty(),
        check('testScore','dont find your test score').isNumeric(),
        check('password','please provide 6 characters long password').isLength({min:6}),
        check('category','select the category of your jobs').not().isEmpty(),
        check('country','select your country').not().isEmpty(),
    ]
    , async (req , res) =>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({error: errors.array()})
    }
   const {fullName , email , age, testScore , password ,category, country,availability } = req.body;
    try {
        let worker = await Worker.findOne({email});
        if(worker) {
            return res.status(400).json({msg:'user already exist'})
        }
        worker = new Worker(
            {
                fullName,
                email,
                age,
                testScore,
                password,
                category,
                country,
                availability

            }
        );
        const salt = await bcrypt.genSalt(10);
        worker.password = await bcrypt.hash(password , salt);
        await worker.save();
        const payload = {
            worker:{
                id:worker.id
            }
        };
        jwt.sign(payload,process.env.SECRET , {
            expiresIn: 3600
        } , (err , token) => {
            if(err) throw err
            res.send({token})
        })
    } catch (e) {
        console.error(e.message);
        res.status(500).send('server  Error')
    }
});

module.exports = router;