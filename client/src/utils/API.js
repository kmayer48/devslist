import axios from "axios";

export default {
    // post the quiz
    postQuiz: function(data) {
        return axios.post("/api/quiz", data);
    },
    // get cards for developers page
    getCards: function() {
        return axios.get("/api/discover");
    },
    // post registration for site
    registration: function(data) {
        return axios.post("/api/register", data);
    }
};