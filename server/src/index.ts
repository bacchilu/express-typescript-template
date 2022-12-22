import express from "express";
import path from "path";

const app = express();
const port = 3000;

const PATH = path.join(__dirname, "../../apps", "test-app", "dist");
app.use("/test-app", express.static(PATH));
app.get("/test-app/*", function (req, res) {
  res.sendFile(path.join(PATH, "index.html"));
});

app.get("/", (req, res) => {
  res.send("Nel mezzo del cammin di nostra vita");
});

app.listen(port, () => {
  console.log(`Express running on port ${port}`);
});
