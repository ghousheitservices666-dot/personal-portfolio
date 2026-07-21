const db = require("../config/db");

const getProjects = (req, res) => {

  const sql = "SELECT * FROM projects";

  db.query(sql, (err, result) => {

    if (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Database Error"
      });
    }

    res.status(200).json({
      success: true,
      projects: result
    });

  });

};

module.exports = {
  getProjects
};