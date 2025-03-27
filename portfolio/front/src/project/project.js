import './project.scss';

function Project(props) {
    const name = props.name;
    
    return (
        <div className={'c-' + props.id + ' page'} id="project-container" style={{backgroundImage: `url(${props.path})`}}>
            <div id='entitle'>
                <h1 id='name' className='outline'>{name}</h1>
                <div className='card shadow' style={{marginLeft: '1vw'}}>
                    <h3 className='project-desc outline'>{props.desc}</h3>
                    <div id='tech'>
                        {props.logos}
                    </div>
                </div>
                <p className='project-desc outline' style={{fontWeight: ''}}>Voir les images</p>
            </div>
        </div>
    )
}

export default Project;