var express = require("express");
var router = express.Router();

router.get("/", function (req, res) {
    res.render("index");
    /*if(!req.user){
        res.render("user/login");
    } else{
        res.render("index");
    }*/
});

module.exports = router;
