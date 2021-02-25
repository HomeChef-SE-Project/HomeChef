const express = require('express');
const nodemon = require('nodemon');
const app = express();
var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth2').Strategy;

app.use(express.static("public"));

passport.use(new GoogleStrategy({
    clientID: "510518196201-kv9ci65083n422689ij3d4linvi4tk3g.apps.googleusercontent.com",
    clientSecret: "OhULxj6fEjSAydwM2a-uiSn1",
    callbackURL: "http://localhost:5000/return",
    passReqToCallback: true
},
    function (request, accessToken, refreshToken, profile, done) {
        if (profile) {
            user = profile;
            return done(null, user);
        }
        else {
            return done(null, false);
        }
    }
));

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
passport.serializeUser(function(user, cb) {
    cb(null, user);
  });
  
  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });

app.use(passport.initialize());
app.set('view engine', 'ejs');
app.use(express.urlencoded({
    extended: true
}));

app.get('/auth/google',
    passport.authenticate('google', {
        scope:
            ['email', 'profile']
    }
    ));

app.get('/auth/google/callback',
    passport.authenticate('google', {
        successRedirect: '/auth/google/success',
        failureRedirect: '/auth/google/failure'
    }), function (req, res) {
        res.redirect('/');
    })

    app.get('/return', 
    passport.authenticate('google', { failureRedirect: '/login' }),
    function(req, res) {
      res.redirect('/user_details');

    });




app.get("/", function (request, response) {   // this is on the server side . Server gets request from clients and we send them repsonses
    console.log(__dirname + "/home.html")
    response.sendFile(__dirname + "/public/home.html");

})

// 510518196201-kv9ci65083n422689ij3d4linvi4tk3g.apps.googleusercontent.com -Oauth ID
// OhULxj6fEjSAydwM2a-uiSn1 - client secret

app.post("/", function (request, response) {

    console.log(request.body);

})

app.get("/login", function (request, response) {
    response.sendFile(__dirname + "/public/login.html")

})
app.post("/login", function (request, response) {
    console.log(request.body);
    response.redirect("/" + request.body.username);
})

app.get("/user_details", function (request, response) {
    response.sendFile(__dirname + "/public/user_details.html");
})

app.post("/user_details",function(request,response){
    console.log(request.body);
    response.redirect("/username");
})

app.get("/:username",function(request,response){
    response.sendFile(__dirname + "/public/user_home.html")
})

app.post("/login", function (request, response) {
})




app.listen(5000, function () {
    console.log("Server running on port 5000");
});


