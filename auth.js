const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

// Use the GoogleStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a token, tokenSecret, and Google profile), and
//   invoke a callback with a user object.
passport.use(
  new GoogleStrategy(
    {
      clientID:
        "247676410560-8gotvmacb72rigd2vk07vb1hk99e23o2.apps.googleusercontent.com",
      clientSecret: "yUe-V7SsSDKNICxJCEf-YvHj",
      callbackURL: "http://localhost:5000/google/callback",
    },
    function (token, tokenSecret, profile, done) {
      //check is profile_id is registered in db
      return done(null, profile);
    }
  )
);
