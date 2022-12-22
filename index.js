const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.get("/", (req, res) => {
  res.render("index");
});

PORT = 3100;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
