const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Launched successfully",
  });
});

app.listen(3000, () => {
  console.log("Server running port 3000");
});
