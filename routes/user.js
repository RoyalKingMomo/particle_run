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
    });
    User.register(newUser, req.body.password, function(err, user){
        if(err){
            console.log(err);
            return res.redirect("/user/register");
        }
        passport.authenticate("local")(req, res, function(){
            res.redirect("/###");
        })
    })
});

router.get("/login", function(req, res){
    res.render("user/login", {page: "login"});
});

router.post("/login", passport.authenticate("local", {
    successRedirect: "/###",
    failureRedirect: "/user/login"
    }), function(req, res){
});

router.get("/logout", function(req, res){
    req.logout();
    res.redirect("/###");
});

router.get("/:id", function(req, res){
    User.findById(req.params.id, function(err, foundUser){
        if(err){
            console.log(err)
            return res.redirect("/###");
        }
        res.render("user/profile", {user: foundUser});
    });
});

module.exports = router;
