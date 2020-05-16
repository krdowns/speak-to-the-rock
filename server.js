// REQUIREMENTS
const express = require("express");
const app = express();
const path = require("path");

// MIDDLEWARE
// app.use('/static', express.static('public'))
// app.use(express.static(path.join(__dirname, "public")));

// // ROUTES
// app.get("/", function (req, res) {
//   res.sendFile("./views/homepage.html", { root: __dirname });
// });

// app.get("/about", function (req, res) {
//   res.sendFile("./views/about.html", { root: __dirname });
// });

// app.get("/buypage", function (req, res) {
//   res.sendFile("./views/buypage.html", { root: __dirname });
// });

// app.get("/cancelled", function (req, res) {
//   res.sendFile("./views/cancelled.html", { root: __dirname });
// });

// app.get("/charge", function (req, res) {
//   res.sendFile("./views/charge.html", { root: __dirname });
// });

// app.get("/contact", function (req, res) {
//   res.sendFile("./views/contact.html", { root: __dirname });
// });

// app.get("/secret", async (req, res) => {
//   const intent = res.json({ client_secret: intent.client_secret }); // ... Fetch or create the PaymentIntent
// });

// app.get("/success", function (req, res) {
//   res.sendFile("./views/success.html", { root: __dirname });
// });

// SERVER START
app.listen(3000, () => {
  console.log("HTTP server listening at localhost:3000");
});
