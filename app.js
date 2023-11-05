// Express Server

const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.use(expressLayouts);

const mahasiswa = [
  {
    nama: "rifqi favian h",
    email: "rifqifavian@gmail.com",
  },
  {
    nama: "data-testing-1",
    email: "datatest1@gmail.com",
  },
  {
    nama: "data-testing-2",
    email: "datatest2@gmail.com",
  },
  {
    nama: "data-testing-3",
    email: "datatest3@gmail.com",
  },
];

app.get("/", (req, res) => {
  res.render("home", {
    layout: "layouts/index",
    title: "Home",
    mahasiswa,
  });
});
app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/product/:id?", (req, res) => {
  res.send(`<h1>Id Product : ${req.params.id}, Category : ${req.query.category} </h1>`);
});
app.use("/", (req, res) => {
  res.status(404);
  res.send("<h1>404</h1>");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
