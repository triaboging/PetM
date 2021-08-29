const {Schema, model, Types} = require('mongoose')
const schema = new Schema({
    title: {type: String,
    required: true, unique: true
    },
    discription: {type: String,
        required: true, unique: true},
    // password: {type: String, required: true},
    owner: {type: Types.ObjectId, ref: 'User'}
    // isActivated: {type: Boolean, default: false},
    // activationLink: {type: String}
})
module.exports = model('Posts', schema)