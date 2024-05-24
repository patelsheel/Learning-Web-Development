import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  //console.log(req.rawHeaders);
  res.send("<h2>Hello</h2>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>My name is Angela</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Me</h1><p>Phone: +44123456789</p>");
});

app.get("/sp", (req, res) =>{
  res.send("<h3>This is a test for endpoint sp </h3>")
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
