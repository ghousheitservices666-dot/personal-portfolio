const express = require("express");
const router = express.Router();
const db = require("../config/db");

// POST Contact
router.post("/", (req, res) => {
  const { name, email, message } = req.body;

  // Basic validation
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "All fields are required."
    });
  }

  const sql =
    "INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)";

  db.query(sql, [name, email, message], (err) => {
    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Database Error"
      });
    }

    res.status(201).json({
      success: true,
      message: "Contact Saved Successfully"
    });
  });
});

module.exports = router;