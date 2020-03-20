const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title:{ type:String, required: true},
    description:{ type:String, required: true},
    file:{ type:String},
   skills:{type: String},
    creator:{ type:String, required: true},
    projectDelivery:{type: String},
    amount:{type: Number , required: true},
    numberWorker:{type: Number , required: true}
});




module.exports = mongoose.model('project' , projectSchema);