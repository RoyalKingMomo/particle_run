var express        = require("express"),
    cookieParser   = require("cookie-parser"),
    session        = require("express-session"),
    app            = express(),
    bodyParser     = require("body-parser"),
    mongoose       = require("mongoose"),
    flash          = require("connect-flash"),
    passport       = require("passport"),
    LocalStrategy  = require("passport-local"),
    methodOverride = require("method-override"),
    MongoStore     = require("connect-mongo")(session),
    User           = require("./models/user");

var indexRoutes = require("./routes/index"),
    userRoutes = require("./routes/user");

mongoose.connect("mongodb://localhost/particlerun", {useMongoClient: true});
mongoose.Promise = global.Promise;
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));
app.use(flash());
// seedDB();

app.use(cookieParser());
app.use(require("express-session")({
    secret: "QWER1234",
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({mongooseConnection: mongoose.connection}),
    cookie: {maxAge: 180 * 60 * 1000} //min * sec * millisec
}));

// Passport Configuration
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
    res.locals.currentUser = req.user;
    res.locals.session = req.session;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
});

app.use("/", indexRoutes);
app.use("/user", userRoutes);

app.listen(3000, function(){
    console.log("Particle Run is listening on PORT3000.");
});
