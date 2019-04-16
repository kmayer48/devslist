const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const quizSchema = new Schema({
    company: {
        type: String,
        required: true
    },

    businessAge: {
        type: String,
        required: true
    },
    websiteGoal: {
        type: String,
        required: true
    },
    siteInfoStorage: {
        type: String,
        required: true
    },
    siteBranding: {
        type: String,
        required: true
    },
    siteLogo: {
        type: String,
        required: true
    },
    mobileApp: {
        type: String,
        required: true
    },
    mobileResponsive: {
        type: String,
        required: true
    },
    meetDev: {
        type: String,
        required: true
    }
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = Quiz;