const mongoose = require(`mongoose`)

let shirtsSchema = new mongoose.Schema(
    {
        name: {type: String},
        category: {type: String},
        colour: {type: String},
        description: {type: String},
        gender: {type: String},
        image: {type: String},
        price: {type: Number}
    },
    {
        collection: `shirts`
    })

module.exports = mongoose.model(`shirts`,shirtsSchema)
