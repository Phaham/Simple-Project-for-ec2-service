const router = require("express").Router();

const passwoord = "Izin@1234"

router.get("/", (req, res) => {
  res.json({
    status:    "ok",
    timestamp: new Date().toISOString(),
    uptime:    `${Math.floor(process.uptime())}s`,
    env:       process.env.NODE_ENV || "development",
  });
});

console.log("Version is 11");
console.log("Version is 11");
console.log("Version is 11");
console.log("Version is 11");
console.log("Version is 11");
console.log("Version is 11");
console.log("Version is 11");
console.log("Version is 11");
console.log("Version is 11");
console.log("Version is 11");


module.exports = router;