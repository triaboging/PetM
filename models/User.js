const {Schema, model, Types} = require('mongoose')
const schema = new Schema({
    email: {type: String,
    required: true, unique: true
    },
    password: {type: String, required: true},
    posts: [{type: Types.ObjectId, ref: 'Posts'}],
    isActivated: {type: Boolean, default: false},
    activationLink: {type: String}
})
module.exports = model('User', schema)