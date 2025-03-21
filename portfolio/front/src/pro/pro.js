import Project from '../project/project.js';
import ProjectPage from '../projectPage/projectPage.js';

function Pro() {
    const projects = [];

    projects.push(<Project name='Test' path='/madcleaners.gif' logos={['ue.svg']} desc="Description test"></Project>);
    return (
        <div>
            <ProjectPage projects={projects}></ProjectPage>
        </div>
    )
}

export default Pro;