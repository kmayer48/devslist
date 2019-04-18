import axios from "axios";

export default {
    // Gets all books
    postQuiz: function (data) {
        return axios.post("/api/quiz", data);
    },
    // Gets the book with the given id
    getCards: function () {
        return axios.get("/api/discover");
    },
    // Send skills 
    postDevSkills: function (data) {
        return axios.post("/api/devSkills", data);
    },

};