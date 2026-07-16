const express = require("express");
const router = express.Router();
const db = require("../config/db");

// POST Contact
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  const sql =
    "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      return res.status(500).json({
        success: false,
        error: err.message,
      });
    }

    res.json({
      success: true,
      message: "Contact Saved Successfully",
    });
  });
});

module.exports = router;