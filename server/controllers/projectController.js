const db = require("../config/db");


const getProjects = (req,res)=>{


    const sql = "SELECT * FROM projects";


    db.query(sql,(err,result)=>{


        if(err){

            return res.status(500).json({
                message:err.message
            });

        }


        res.status(200).json(result);


    });


};


module.exports = {
    getProjects
};

