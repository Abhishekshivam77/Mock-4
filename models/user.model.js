const mongoose = require("mongoose")

const userSchema = mongoose.Schema({

    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    address: {
      street: {type: String},
      city: {type: String, required: true},
      state: {type: String, required: true},
      country: {type: String, required: true},
      zip: {type: Number, required: true}
    }
});

const User = mongoose.model('user', userSchema);

module.exports =
    User
