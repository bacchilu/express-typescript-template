import express from "express";
import path from "path";

const app = express();
const port = 3000;

const PATH = path.join(__dirname, "../../apps", "frontend", "dist");
app.use("/frontend", express.static(PATH));
app.get("/frontend/*", function (req, res) {
  res.sendFile(path.join(PATH, "index.html"));
});

app.get("/", (req, res) => {
  res.send("Nel mezzo del cammin di nostra vita");
});

app.listen(port, () => {
  console.log(`Express running on port ${port}`);
});
