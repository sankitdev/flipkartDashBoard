import session from "express-session";

export const testSession = session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }, // Set to true in production if using HTTPS
});
