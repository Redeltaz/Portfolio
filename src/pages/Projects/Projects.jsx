import {Component, useEffect} from 'react'
import './projects.css'
import ProjectsData from './allProjects.json'

export function SingleProject(props){
    return(
        <div className="project">
            <p>{props.name}</p>
        </div>
    )
}

export function Projects(props){
    const listProjects = ProjectsData.map((projet) =>
        <SingleProject 
            key= {projet.name}
            name= {projet.name}
        />
    );

    return (
        <div className="projects">
            {listProjects}
        </div>
    )
}