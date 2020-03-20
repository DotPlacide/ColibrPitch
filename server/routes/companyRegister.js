const router = require('express').Router();
const {check , validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// worker model
const Company = require('../models/Company');


router.post('/' ,
    [
        check('fullName','please provide a name').not().isEmpty(),
        check('email','please provide a valid email').isEmail(),
        check('size','enter the size of your company').not().isEmpty(),
        check('password','please provide 6 characters long password').isLength({min:6}),
        check('country','select your country').not().isEmpty(),
    ]
    , async (req , res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({error: errors.array()})
        }
        const {fullName , email , password , size, country } = req.body;
        try {
            let company = await Company.findOne({email});
            if(company) {
                return res.status(400).json({msg:'user already exist'})
            }
            company = new Company(
                {
                    fullName,
                    email,
                    password,
                    size,
                    country,
                }
            );
            const salt = await bcrypt.genSalt(10);
            company.password = await bcrypt.hash(password , salt);
            await company.save();
            const payload = {
                company:{
                    id:company.id
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