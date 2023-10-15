// Imports
const express = require("express");
const requestIp = require("request-ip");

// Init Router
const router = express.Router();

// Use middleware
router.use(requestIp.mw());

router.get("/whoami", (req, res) => {
  // Parse Request headers
  const ip = req.clientIp;
  const language = req.header("accept-language");
  const userAgent = req.header("user-agent");

  // Throw error if properties are missing
  if (!ip || !language || !userAgent) {
    res.status(400).json({
      error: "Missing information from request.",
    });
    return;
  } else {
    // Return json
    res.status(200).json({
      ipaddress: ip,
      language,
      software: userAgent,
    });
    return;
  }
});

module.exports = router;
