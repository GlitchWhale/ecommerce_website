const mongoose = require(`mongoose`)

let usersSchema = new mongoose.Schema(
    {
        name: {type: String, require: true},
        email: {type: String, require: true},
        password: {type: String, require: true},
        accessLevel: {type: Number, default:parseInt(process.env.ACCESS_LEVEL_NORMAL_USER)}
    },
    {
        collection: `users`
    })

module.exports = mongoose.model(`users`,usersSchema)