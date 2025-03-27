import Carrousel from '../carrousel/carrousel.js';
import CarrouselList from '../carrousel/carrouselList.js';
import Navbar from '../navbar/navbar.js';
import Project from '../project/project.js';

function Pro() {
    const projects = [];

    projects.push(<Project id='1' name='Formation VR' path='/formation vr/chimie.png' logos={['ue.svg']} desc="Description test"></Project>);
    projects.push(<Project id='2' name='Controle Pico' path='/pico/menu.jpg' logos={['ue.svg']} desc="Description test"></Project>);
    projects.push(<Project id='3' name='Mini-jeux' path='/formation vr/chimie.png' logos={['ue.svg']} desc="Description test"></Project>);

    return (
        <div id='perso-container'>
            <Navbar></Navbar>
            <Carrousel></Carrousel>
            {projects}
            <CarrouselList></CarrouselList>
        </div>
    )
}

export default Pro;