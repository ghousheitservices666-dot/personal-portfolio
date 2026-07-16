import { useEffect, useState } from "react";
import API from "../services/api";


function Projects(){

    const [projects,setProjects] = useState([]);


    useEffect(()=>{

        getProjects();

    },[]);



    const getProjects = async()=>{

        try{

            const response = await API.get("/projects");

            setProjects(response.data);

        }
        catch(error){

            console.log(error);

        }

    };


    return (

        <section id="projects">

            <h2>My Projects</h2>


            <div className="projects-container">

                {
                    projects.map((project)=>(

                        <div className="project-card" key={project.id}>

                            <h3>
                                {project.title}
                            </h3>


                            <p>
                                {project.description}
                            </p>


                            <p>
                                <b>Tech:</b>
                                {project.technologies}
                            </p>


                            <a 
                            href={project.github_link}
                            target="_blank">
                                GitHub
                            </a>


                        </div>

                    ))
                }

            </div>

        </section>

    );

}


export default Projects;