const mongoose = require("mongoose");

const placesSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    contacto: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    area: {
        type: Number,
        required: true
    },
    geometry: []
    
});

module.exports = mongoose.model('terrenos', placesSchema);