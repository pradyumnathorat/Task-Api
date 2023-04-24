const mongoose = require('mongoose');
const schema = mongoose.Schema;

const taskSchema = schema({
    title : String,
    is_completed : Boolean
})

const taskModel = mongoose.model('Task' , taskSchema)

module.exports = taskModel;