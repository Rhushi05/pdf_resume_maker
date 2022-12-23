const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const publicDirectory = path.join(__dirname, "./public");
app.use(express.static(publicDirectory));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/resume", (req, res) => {
  res.render("resume");
});

app.post("/make", (req, res) => {
  console.log(req.body);
  let name = req.body.name1;
  let phone = req.body.phone;
  let dob = req.body.dob;
  let gender = req.body.gender;
  let address = req.body.Address;
  let email = req.body.email;
  let Linkdin = req.body.Linkdin;
  let about = req.body.about;
  let languages = req.body.Languages;
  let hobbies = req.body.Hobbies;
  let education = req.body.edu;
  let certification = req.body.certi;
  console.log(hobbies);

  res.render("resume", {
    name: name,
    phone: phone,
    dob: dob,
    gender: gender,
    address: address,
    email: email,
    Linkdin: Linkdin,
    about: about,
    education: education,
    certi: certification,
    hobbies: hobbies,
    languages: languages,
  });
});

PORT = 3100;
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
