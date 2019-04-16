import axios from "axios";

export default {
 // Gets all books
 postQuiz: function() {
   return axios.post("/api/quiz");
 },
 // Gets the book with the given id
 getCards: function() {
   return axios.get("/api/discover");
 },
};