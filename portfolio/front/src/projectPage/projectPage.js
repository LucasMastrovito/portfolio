import ProjectList from '../project/projectList.js';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import './projectPage.scss';

function ProjectPage(props) {
    const navigate = useNavigate();
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
        console.log(e.target.alt)
        setIndex(parseInt(e.target.alt));
    }

    const back = () => {
        navigate('/');
    }

    return (
        <div id='perso-container'>
            <img id='back-btn' alt='home' onClick={back} src='/home.png' />
            {projects[index]}
            <ProjectList click={changeProject} change={clickOnProject} projects={projects} index={index}></ProjectList>
        </div>
    )
}

export default ProjectPage;