const express = require("express");
const app = express();
const fs = require("fs").promises;

app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.json());

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/voice", async (req, res) => {
  const { message } = req.body;
  await fs.writeFile("./test.txt", message, { flag: "a+" });
  res.json({ message: "success" });
});

app.listen(5100);
