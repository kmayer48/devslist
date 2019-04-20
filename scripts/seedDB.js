const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
 process.env.MONGODB_URI ||
 "mongodb://localhost:27017/devslist"
);

const UserSeed = [{
 "skillset": [],
 "name": " hi",
 "username": " test",
 "password": " test",
 "email": " test",
 "githubRepo": " test",
 "currentPosition": " test",
 "experience": " test",
 "location": " test",
 "education": " test",
 "certifications": " test",
 "professionalStatement": " test ",
 "hourlyRate": "test",
}
];

db.User
 .remove({})
 .then(() => db.User.collection.insertMany(UserSeed))
 .then(data => {
   console.log(data.result.n + " records inserted!");
   process.exit(0);
 })
 .catch(err => {
   console.error(err);
   process.exit(1);
 });