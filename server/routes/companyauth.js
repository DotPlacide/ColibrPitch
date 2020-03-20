const router = require('express').Router();
const {check , validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authcompany = require('../middleware/authcompany');

// worker model
const Company = require('../models/Company');

router.get('/' , authcompany, async (req , res) =>{
    try{
        const company = await Company.findById(req.company.id).select("-password");
        res.json(company)
    }catch (err) {
        console.error(err.message);
        res.status(500).send('server Error')
    }

});

router.post('/' ,
    [

        check('email','please provide a valid email').isEmail(),
        check('password','please provide 6 characters long password').exists()
    ]
    , async (req , res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({error: errors.array()})
        }
        const { email , password } = req.body;
        try {
            let company = await Company.findOne({email});
            if(!company) {
                return res.status(400).json({msg:'invalid credentials'})
            }
            const match = await bcrypt.compare(password , company.password);
            if(!match){
                return res.status(400).json({msg:'invalid credentials'})
            }
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