const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const userSchema = new Schema({
    username: { 
        type: String, 
        required: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    name: {
        type: String
    },
    email: { 
        type: String
    },
    githubRepo: { 
        type: String
    },
    image: { 
        type: String
    },
    currentPosition: { 
        type: String
    },
    experience: { 
        type: String
    },
    location: { 
        type: String
    },
    education: { 
        type: String
    },
    certifications: { 
        type: String
    },
    professionalStatement: { 
        type: String,
    },
    hourlyRate: { 
        type: String,
    },
    skillset: { 
        type: Array,
    },
});

userSchema.methods.hashPassword = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
};

userSchema.methods.comparePassword = function(password, hash) {
    return bcrypt.compareSync(password, hash)
};

const User = mongoose.model("user", userSchema);

module.exports = User;