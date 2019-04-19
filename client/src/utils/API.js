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
    register: function (data) {
        return axios.post("/api/register", data);
    }
};