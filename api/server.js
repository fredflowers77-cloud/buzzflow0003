const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => res.json({ status: "BuzzFlow ACTIVE 🚀" }));

app.post("/execute", (req, res) => {
  const { user, action } = req.body || {};
  if (!user) return res.status(401).json({ error: "No identity" });
  res.json({ user, action, status: "EXECUTED", timestamp: new Date() });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log("Running on", port));
