const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const hbs = require("express-handlebars");
const cors = require("cors");
const passport = require("passport");
const cookieSession = require("cookie-session");
require("./auth");

const app = express();
app.use(express.json());

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
    origin: true,
    credentials: true,
  })
);

// Example protected and unprotected routes
//app.get("/", (req, res) => res.render("login"));
app.get("/failed", (req, res) => res.send("You Failed to log in!"));

// In this route you can see that if the user is logged in u can acess his info in: req.user
// app.get('/good', isLoggedIn, (req, res) => res.send(`Welcome ${req.user.displayName}!`))
app.use("/good", isLoggedIn, (req, res) => {
  console.log("y");
  res.redirect("http://localhost:3000/good");
});

app.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.use(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  function (req, res) {
    res.redirect("/good");
  }
);

app.get("/logout", (req, res) => {
  req.session = null;
  req.logout();
  res.redirect("http://localhost:3000");
});

// app.use(express.static(path.join(__dirname, "client/public")));
// app.get("*", function (req, res) {
//   res.sendFile(path.join(__dirname, "client/public/", "index.html"));
// });

app.listen(5000, () => {
  console.log("server running on port 5000");
});
