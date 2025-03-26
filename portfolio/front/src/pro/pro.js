import Caroussel from '../caroussel/caroussel.js';
import Project from '../project/project.js';
import ProjectPage from '../projectPage/projectPage.js';

function Pro() {
    const projects = [];

    projects.push(<Project name='Formation VR' path='/formation vr/chimie.png' logos={['ue.svg']} desc="Description test"></Project>);
    projects.push(<Project name='Controle Pico' path='/pico/menu.jpg' logos={['ue.svg']} desc="Description test"></Project>);
    projects.push(<Project name='Mini-jeux' path='/formation vr/chimie.png' logos={['ue.svg']} desc="Description test"></Project>);

    return (
        <div>
            <Caroussel></Caroussel>
            <ProjectPage projects={projects}></ProjectPage>
        </div>
    )
}

export default Pro;