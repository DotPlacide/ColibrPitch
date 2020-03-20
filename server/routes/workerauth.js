const router = require('express').Router();
const {check , validationResult} = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const authworker = require('../middleware/authwork');

// worker model
const Worker = require('../models/Workers');

router.get('/' , authworker, async (req , res) =>{
try{
    const worker = await Worker.findById(req.worker.id).select("-password");
    res.json(worker)
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
            let worker = await Worker.findOne({email});
            if(!worker) {
                return res.status(400).json({msg:'invalid credentials'})
            }
            const match = await bcrypt.compare(password , worker.password);
            if(!match){
                return res.status(400).json({msg:'invalid credentials'})
            }
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