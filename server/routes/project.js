const router = require('express').Router();
const {check , validationResult} = require('express-validator');
// worker model
const Project = require('../models/Project');

router.get('/' , (req,res, next) =>{
    Project.find({}).then((projects) => {
        res.send(projects)
    })
})

router.get('project/:id' , (req,res, next) =>{
    Project.findByid(req.params.id).then((doc) => {
        if(!doc){
            return res.status(400).end()
        }
        return res.status(200).json(doc);
    }).catch(err => next(err))
});

router.post('/' ,
    [
        check('title','please provide a title to your project').not().isEmpty(),
        check('description','please provide a description to your project').not().isEmpty().isLength({min:300}),
        check('file','please provide a file to your project').isString(),
        check('skills','we advice you to select that you need for this project').not().isEmpty(),
        check('creator','dont find your test score').not().isEmpty(),
        check('projectDelivery','choose one option please ').not().isEmpty(),
        check('numberWorker','how many worker do you need please').isNumeric(),
        check('amount','amount please').isNumeric(),
    ]
    , async (req , res) =>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({error: errors.array()})
        }
        const {title , description , file, skills , creator ,projectDelivery, numberWorker,amount } = req.body;
            project = new Project(
                {
                    title,
                    description,
                    file,
                    skills,
                    creator,
                    projectDelivery,
                    numberWorker,
                    amount

                }
            );

        try {
           await project.save();
        } catch (e) {
            console.error(e.message);
            res.status(500).send('Creating job failed , please try again')
        }
        res.status(201).json({project: project})
    });

module.exports = router;