function ProjectButton(props) {
    return (
        <div id="project-btn" className="shadow" onClick={props.click}>
            <img id="project-pic" alt={props.index} src={props.projects[props.index].props.path} />
        </div>
    )
}

function ProjectList(props) {
    return (
        <div id="projectlist">
            <img alt="left" className="arrow" src="/arrow_left.png" value='left' onClick={props.click} />
            <div className="flex" style={{width: 'auto', gap: '20px'}}>
                <ProjectButton index={props.index > 0 ? props.index - 1 : props.projects.length - 1} click={props.change} projects={props.projects}></ProjectButton>
                <ProjectButton index={props.index} click={props.change} projects={props.projects}></ProjectButton>
                <ProjectButton index={props.index < props.projects.length - 1 ? props.index + 1 : 0} click={props.change} projects={props.projects}></ProjectButton>
            </div>
            <img alt="right" className="arrow" src="/arrow_right.png" value='right' onClick={props.click} />
        </div>
    )
}

export default ProjectList;