const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const hbs = require("express-handlebars");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./auth");

const app = express();

app.use(express.static(path.join(__dirname, "client/build")));
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "client/build", "index.html"));
// });

app.use(
  cookieSession({
    name: "tuto-session",
    keys: ["key1", "key2"],
  })
);

// Auth middleware that checks if the user is logged in
const isLoggedIn = (req, res, next) => {
  if (req.user) {
    next();
  } else {
    res.sendStatus(401);
  }
};

// Initializes passport and passport sessions

app.use(passport.initialize());
app.use(passport.session());
app.use(
  cors({
    origin: "http://localhost:3000", // allow to server to accept request from different origin
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true, // allow session cookie from browser to pass through
  })
);

// Example protected and unprotected routes
app.get("/", (req, res) => res.render("login"));
app.get("/failed", (req, res) => res.send("You Failed to log in!"));

// In this route you can see that if the user is logged in u can acess his info in: req.user
// app.get('/good', isLoggedIn, (req, res) => res.send(`Welcome ${req.user.displayName}!`))
app.get("/good", isLoggedIn, (req, res) => res.render("student"));

// Auth Routes
app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/failed" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/good");
  }
);

app.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("/");
});

// configure mongoose to mongoDB//

/*configering express*/
app.use(express.json());

/*routes*/
/*app.use( '/', ( req ,res )  =>{
  res.send("welcome");

});
/*app.get( '/', ( req ,res )  =>{
  res.render("hello");*/

// GET /auth/google/callback
//   Use passport.authenticate() as route middleware to authenticate the
//   request.  If authentication fails, the user will be redirected back to the
//   login page.  Otherwise, the primary route function function will be called,
//   which, in this example, will redirect the user to the home page.

app.listen(5000, () => {
  console.log("server running on port 5000");
});
