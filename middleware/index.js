var middlewareObj = {};

middlewareObj.isLoggedIn = function(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    req.flash("error", "You must log in to continue.");
    res.redirect("/login");
}

module.exports = middlewareObj;
