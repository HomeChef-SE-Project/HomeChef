const express = require("express");
const nodemon = require("nodemon");
const app = express();
var passport = require("passport");
const session = require("express-session");
var GoogleStrategy = require("passport-google-oauth2").Strategy;
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();

const hm = require("./routes/homemaker");
app.use(express.static("public"));
app.use(bodyParser.json());
app.use(cors());

app.use("/homemakers", hm);

app.use(express.static("public"));

mongoose.connect(
    process.env.DB_CONNECTION,
    { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true },
    () => {
        console.log("Connected to db"); //coming here means connect has worked properly
    }
);

const db = mongoose.connection;

const profileSchema = new mongoose.Schema({
    id: String,
    name: String,
    email: String,
    photourl: String,
    mobileNumber: Number,
    wallet: Number,
    address: String,
});
const orderSchema = new mongoose.Schema({
    orderId: String,
    vendorId: String,
    orderDetails: { items: [String], bill: Number, rating: Number },
});
const userSchema = new mongoose.Schema({
    googleID: String,
    profile: profileSchema,
    orders: [String],
    userDetailsBool: {
        type: Boolean,
        default: false,
    },
});

const User = mongoose.model("user", userSchema);

var user_global = null;
var user_details_bool = false;

passport.use(
    new GoogleStrategy(
        {
            clientID:
                "510518196201-kv9ci65083n422689ij3d4linvi4tk3g.apps.googleusercontent.com",
            clientSecret: "OhULxj6fEjSAydwM2a-uiSn1",
            callbackURL: "http://localhost:5000/return",
            passReqToCallback: true,
        },
        function (request, accessToken, refreshToken, profile, done) {
            if (profile) {
                user_global = profile;
                console.log("At line 65");
                console.log(user_global);
                storeDB(profile);

                return done(null, user_global);
            } else {
                return done(null, false);
            }
        }
    )
);

function storeDB(profile) {
    User.find({ googleID: profile.id }, function (err, docs) {
        if (err) {
            console.log(err);
        }
        if (docs.length) {
        } else {
            const userdata = new User({
                googleID: profile.id,
                profile: {
                    id: profile.id,
                    name: profile.given_name,
                    email: profile.email,
                    photourl: profile.picture,
                    wallet: 0,
                },
                userDetailsBool: true,
            });
            //user_details_bool: true;
            console.log("made it true!!");
            console.log(userdata);
            userdata.save();
        }
    });
}

// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Facebook profile is serialized
// and deserialized.
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

app.use(passport.initialize());
app.set("view engine", "ejs");
app.use(
    express.urlencoded({
        extended: true,
    })
);

app.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["email", "profile"],
    })
);

app.get(
    "/auth/google/callback",
    passport.authenticate("google", {
        successRedirect: "/auth/google/success",
        failureRedirect: "/auth/google/failure",
    }),
    function (req, res) {
        res.redirect("/");
    }
);

app.get(
    "/return",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function (request, response) {
        var userly = true;
        console.log("128" + user_details_bool);

        // user_details_bool = tempUser.userDetailsBool;
        console.log("134");
        console.log("134" + user_details_bool);
        User.find({ googleID: user_global.id }, function (err, docs) {
            console.log("got in!!");
            console.log(docs);
            var userly = false;
            if (docs.length) {
                userly = docs[0].userDetailsBool;
                console.log(user_details_bool);
                console.log(docs[0].userDetailsBool);
            }

            if (!userly) {
                //response.send(user_global.id);
                console.log("Hii there!" + userly);
                response.redirect("/user_details");
            } else {
                //response.send(user_global.id);
                var _url = "/user/" + user_global.id;
                // response.redirect(_url);
                response.redirect("http://localhost:3000" + _url);
            }
        });
    }
);

app.get("/", function (request, response) {
    // this is on the server side . Server gets request from clients and we send them repsonses
    console.log(__dirname + "/home.html");
    //console.log(response)
    response.sendFile(__dirname + "/public/index.html");
});

// 510518196201-kv9ci65083n422689ij3d4linvi4tk3g.apps.googleusercontent.com -Oauth ID
// OhULxj6fEjSAydwM2a-uiSn1 - client secret

app.post("/", function (request, response) {
    console.log(request.body);
});

app.get("/login", function (request, response) {
    response.sendFile(__dirname + "/public/login.html");
});
app.post("/login", function (request, response) {
    //console.log(request.body);
    response.redirect("/" + request.body.username);
});

app.get("/user_details", function (request, response) {
    // console.log(response)
    response.sendFile(__dirname + "/public/user_details.html");
});
//console.log(user_global)
app.post("/user_details", function (request, response) {
    User.updateOne(
        { googleID: user_global.id },
        {
            $set: {
                "profile.address": request.body.address,
                "profile.mobileNumber": request.body.mobileNumber,
            },
        },
        function (err, res) {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        }
    );
    console.log(request.body);
    response.redirect("/user/" + user_global.id);
});

app.get("/user/:userid", function (request, response) {
    User.findOne({ googleID: user_global.id }, function (err, foundUser) {
        //response.send(foundUser);
    });
    //   response.send()
    response.sendFile(__dirname + "/public/user_home.html");
});

app.listen(5000, function () {
    console.log("Server running on port 5000");
});

module.exports = user_global;
