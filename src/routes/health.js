const router = require("express").Router();

router.get("/", (req, res) => {
  res.json({
    status:    "ok",
    timestamp: new Date().toISOString(),
    uptime:    `${Math.floor(process.uptime())}s`,
    env:       process.env.NODE_ENV || "development",
  });
});

console.log("Version is 13");

const num = 12
num =9


module.exports = router;