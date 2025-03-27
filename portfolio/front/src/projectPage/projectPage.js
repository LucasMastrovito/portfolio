import ProjectList from '../project/projectList.js';
import { useState } from 'react';
import './projectPage.scss';
import CarrouselList from '../carrousel/carrouselList.js';
import Navbar from '../navbar/navbar.js';

function ProjectPage(props) {
    const projects = props.projects;
    const [index, setIndex] = useState(0);

    const changeProject = (e) => {
        if (e.target.alt === 'right') {
            setIndex(index === projects.length - 1 ? 0 : index + 1);
        } else {
            setIndex(index === 0 ? projects.length - 1 : index - 1);
        }
    }

    const clickOnProject = (e) => {
        setIndex(parseInt(e.target.alt));
    }

    return (
        <div id='perso-container'>
            <Navbar></Navbar>
            <div id='projects'>
                {projects}
            </div>
            <CarrouselList click={changeProject} change={clickOnProject} projects={projects} index={index}></CarrouselList>
            {/* <ProjectList click={changeProject} change={clickOnProject} projects={projects} index={index}></ProjectList> */}
        </div>
    )
}

export default ProjectPage;