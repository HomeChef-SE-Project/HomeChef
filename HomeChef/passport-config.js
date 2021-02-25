const passport = require('passport');
const ID = require('./config').GOOGLE_CLIENT_ID;
const ClientSecret = require('./config').GOOGLE_CLIENT_SECRET;
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser(function (user, done) {
    done(null, user.id);
})

passport.deserializeUser(function (id, done) {
    done(null, id);
})

passport.use(new GoogleStrategy({
    clientID: Id,
    clientSecret: ClientSecret,
    callbackURL: "http://locaalhost:3000/google/callback"
},
    function (accessToken, refreshToken, profile, cb) {
        return cb(null, profile);
    }
));