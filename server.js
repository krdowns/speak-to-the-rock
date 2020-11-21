const express = require("express");
const app = express();
const path = require("path");

app.use(express.static(path.join(__dirname)));
app.use("/styles", express.static(__dirname));
// app.use("/images", express.static(__dirname + "/images"));
app.use("/scripts", express.static(__dirname + "/scripts"));

// viewed at based directory http://localhost:8080/
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/homepage.html"));
});

// add other routes below
app.get("/listen", function (req, res) {
  res.sendFile(path.join(__dirname + "/listen.html"));
});

app.get("/watch", function (req, res) {
  res.sendFile(path.join(__dirname + "/watch.html"));
});

app.listen(process.env.PORT || 8080);
