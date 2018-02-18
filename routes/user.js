var express = require("express");
var router = express.Router();
var passport = require("passport");
var User = require("../models/user");

router.get("/register", function(req, res){
    res.render("user/register", {page: "register"});
});

router.post("/register", function(req, res){
    var newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        age: req.body.age,
        weight: req.body.age
    });
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            req.flash("error", err.message);
            return res.redirect("/user/register");
        }
        passport.authenticate("local")(req, res, function(){
            req.flash("success", "Welcome to Particle Run " + user.username);
            res.redirect("/");
        })
    })
});

router.get("/login", function(req, res){
    res.render("user/login", {page: "login"});
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/user/login",
    failureFlash: true
    }), function(req, res){
});

//Logout route
router.get("/logout", function(req, res){
    req.logout();
    req.flash("success", "Signed out");
    res.redirect("/");
});

//User Profile
router.get("/:id", function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err){
            req.flash("error", err.message);
            return res.redirect("/");
        }
        res.render("user/profile", {user: foundUser});
    });
});

module.exports = router;
