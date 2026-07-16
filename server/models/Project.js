const db = require("../config/db");


const Project = {

    getAll: (callback)=>{

        const sql = "SELECT * FROM projects";

        db.query(sql, callback);

    },


    create: (project, callback)=>{

        const sql = `
            INSERT INTO projects
            (title, description, technologies, githubLink, demoLink, image)
            VALUES (?, ?, ?, ?, ?, ?)
        `;


        const values = [
            project.title,
            project.description,
            project.technologies,
            project.githubLink,
            project.demoLink,
            project.image
        ];


        db.query(sql, values, callback);

    }

};


module.exports = Project;