const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const companySchema = mongoose.Schema({
    name: {type: String, required: true, unique: true},
    description: {type: String, required: true},
    owner: {type: String, required: true},
    employees:{type: Map, required: true}
});


companiesSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Company",companiesSchema);
