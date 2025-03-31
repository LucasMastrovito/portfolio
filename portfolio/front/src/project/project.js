import { useState } from 'react';
import './project.scss';
import Screens from './screens';

function Project(props) {
    const [imgs, setImgs] = useState(false);

    const toggleImgs = (e) => {
        setImgs(!imgs);
        window.dispatchEvent(new CustomEvent('activeCarrouselList', {detail: imgs}));
    }
    
    return (
        <div className={'c-' + props.id + ' page'} id="project-container" style={{backgroundImage: `url(${props.folder}bg.${props.ext})`}}>
            <Screens display={imgs} pics={props.pics} toggle={toggleImgs} folder={props.folder}></Screens>
            <div id='entitle'>
                <h1 id='name' className='outline'>{props.name}</h1>
                <div className='card shadow' style={{marginLeft: '1vw'}}>
                    <h3 className='project-desc outline'>{props.desc}</h3>
                    <div id='tech'>
                        {props.logos}
                    </div>
                    <p id='display' className='project-desc outline' onClick={toggleImgs} style={{fontWeight: ''}}>Voir les images</p>
                </div>
                
            </div>
        </div>
    )
}

export default Project;