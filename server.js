const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/questions", (req, res) => {
  res.sendFile(__dirname + "/question.json");
});

app.get("/ping", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`app listening on port ${port}!`));
