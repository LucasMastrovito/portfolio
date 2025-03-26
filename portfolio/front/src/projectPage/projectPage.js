import ProjectList from '../project/projectList.js';
import { useState } from 'react';
import './projectPage.scss';

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
            {projects[index]}
            <ProjectList click={changeProject} change={clickOnProject} projects={projects} index={index}></ProjectList>
        </div>
    )
}

export default ProjectPage;