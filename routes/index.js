const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth/auth-routes")

// quiz routes
router.use("/api", apiRoutes);

// auth routes
router.use('/auth', authRoutes);

// logged in function
var loggedIn = function (req, res, next) {
    if (req.isAuthenticated()) {
        next()
    } else {
        res.redirect('/login')
    }
};

// If no API routes are hit, send the React app
router.use(function (req, res) {
    res.sendFile(path.join(__dirname, "../client/public/index.html"));
});

// logout routes
router.get('/logout', function (req, res) {
    req.logout()
    res.redirect('/')
});

module.exports = router;