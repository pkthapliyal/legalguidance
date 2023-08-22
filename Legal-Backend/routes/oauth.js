const express = require("express")
const { v4: uuidv4 } = require('uuid');
const { UserModel } = require("../model/user.model");
const { LawyerModel } = require("../model/lawyer.model");
const passport = require("passport");
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const router = express.Router()
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


passport.use(new GoogleStrategy({
    clientID: '674308305530-38i4dioh3b72dqfukb4jpudf8uj7bs96.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: "https://legal-guidance-laws.onrender.com/auth/google/callback"
},
    function (googleAccessToken, refreshToken, profile, cb) {
        // return cb(null, profile);
        return cb(null, { googleAccessToken, name: profile.displayName, email: profile.emails[0].value })
    }
));


passport.serializeUser(function (user, done) {
    done(null, user);
})
passport.deserializeUser(function (user, done) {
    done(null, user);
    // console.log(user._json)
})


router.get("/auth/google",
    passport.authenticate('google', { scope: ["email", 'profile'] })
)


router.get("/auth/google/callback",
    passport.authenticate("google", {
        // successRedirect: "/dashboard",
        failureRedirect: "/auth/failure",
        // session: false
    }),
    async function (req, res) {
        const { email, name, googleAccessToken } = req.user

        // / find the existing user, 
        //  then save th euser 
        const userData = await UserModel.findOne({ email })

        // const user = await UserModel(User)
        // user.save()

        if (userData) {
            const token = jwt.sign({ userId: userData._id }, process.env.JWT_SECRET, {
                expiresIn: "24h",
            });
            console.log("userdata------->>", userData)
            res.redirect(`https://legal-testing.netlify.app/authetication/loggedin.html?userId=${userData._id}`)
            // res.redirect(`http://127.0.0.1:5500/Back-end/routes/roles.html?userId=${userData._id}&token=${token}&lawyer=${lawyer}&userData=${userData}`)
        }
        else {
            let user = { email, name, password: uuidv4(), role: "client" }
            const newUser = await UserModel(user)
            await newUser.save()
            console.log(newUser)
            res.redirect(`https://legal-testing.netlify.app/authetication/roles.html?userId=${newUser._id}`)
            // res.sendFile(__dirname + "/dashboard.html")
        }
    }
)

router.get("/sendToken/:userId", async (req, res) => {

    const userData = await UserModel.findOne({ _id: req.params.userId })
    const token = jwt.sign({ userId: userData._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
    });
    const lawyer = await LawyerModel.findOne({
        userId: userData._id,
    });

    res.status(200).send({ token, userData, lawyer });

})
// Update the roles 
router.put("/sendToken/:userId", async (req, res) => {

    const userData = await UserModel.findByIdAndUpdate({ _id: req.params.userId }, { ...req.body })
    const token = jwt.sign({ userId: userData._id }, process.env.JWT_SECRET, {
        expiresIn: "24h",
    });
    console.log(userData)
    const lawyer = await LawyerModel.findOne({
        userId: userData._id,
    });
    res.status(200).send({ token, userData, lawyer });
})


module.exports = {
    router
}