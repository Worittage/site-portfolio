import React, { Component } from 'react'
import Project from '../components/project/Project'
import {projects} from "../helpers/projectsList"


export class Projects extends Component {
    render() {
    return (
        <div>
        <main className="section">
    <div className="container">
    <h2 className="title-1">Projects</h2>
    <ul className="projects">
{/*Ниже используем массив из папки projectsList.js  */}

      {projects.map((project, index) => {
            return <Project key={index} title={project.title} img={project.img}  />
        })} 
        
    </ul>
    </div>
</main>
        </div>
    )
    }
}

export default Projects