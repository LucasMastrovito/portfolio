import Navbar from '../navbar/navbar';
import './project.scss';

function Project(props) {
    const name = props.name;
    const logos = [];

    props.logos.forEach(function(element, i) {
        logos.push(<img className='icon' key={i} alt='logo' src={'/svg/' + element}></img>);
    });
    
    return (
        <div id="project-container" style={{'backgroundImage': `url('${props.path}')`}}>
            <Navbar></Navbar>
            <div id='entitle'>
                <h1 id='name' className='outline'>{name}</h1>
                <div className='card shadow' style={{marginLeft: '1vw'}}>
                    <h3 className='project-desc outline'>{props.desc}</h3>
                    <div id='tech'>
                        {logos}
                    </div>
                </div>
                <p className='project-desc outline' style={{fontWeight: ''}}>Voir les images</p>
            </div>
        </div>
    )
}

export default Project;