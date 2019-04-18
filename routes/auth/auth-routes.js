const router = require('express').Router();
const passport = require('passport')
const user = require('../../models/user')

//auth login
router.get('/', function (req, res, next) {
    res.render('index')
})

module.exports = function (passport) {
    router.post('/register', function (req, res, next) {
        const body = req.body,
            username = body.username,
            password = body.password;
        user.findOne({
            username: username
        }, function (err, doc) {
            if (err) {
                res.status(500).send('error occured')
            } else {
                if (doc) {
                    res.status(500).send('Username already exists')
                } else {
                    const record = new User()
                    record.username = username;
                    record.password = record.hashPassword(password);
                    record.save(function (err, user) {
                        if (err) {
                            res.status(500).send('db error')
                        } else {
                            res.send(user)
                        }
                    })
                }
            }
        })
    });
    router.post('/login',passport.authenticate('local', {
        failureRedirect: '/login',
        successRedirect: '/profile',
    }), function(req, res) {
        res.send('login success')
    })
    return router;
};
