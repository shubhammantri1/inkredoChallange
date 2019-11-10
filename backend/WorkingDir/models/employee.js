const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const employeeSchema = mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required:true, unique: true},
    userId: {type: String, required: true},
    password: {type: String, required: true},
    currentStatus: {type: Boolean, required: false}
});

employeeSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Employee", employeeSchema);