import Carrousel from '../carrousel/carrousel.js';
import CarrouselList from '../carrousel/carrouselList.js';
import Navbar from '../navbar/navbar.js';
import Project from '../project/project.js';
import Techno from '../techno/techno.js';
//import '../perso/perso.scss';

function Pro() {
    const projects = [];

    projects.push(<Project key='1' id='1' name='Formation VR' path='formation.png' logos={[<Techno key='1' name='Unreal Engine' path='ue.svg'></Techno>]} desc="Description test"></Project>);
    projects.push(<Project key='2' id='2' name='Controle Pico' path='pico.jpg' logos={[<Techno key='1' name='Unreal Engine' path='ue.svg'></Techno>]} desc="Description test"></Project>);
    projects.push(<Project key='3' id='3' name='Mini-jeux' path='jeux.jpg' logos={[<Techno key='1' name='Unreal Engine' path='ue.svg'></Techno>]} desc="Description test"></Project>);
    projects.push(<Project key='4' id='4' name='CvTek' path='jeux.jpg' logos={[<Techno key='1' name='Unreal Engine' path='ue.svg'></Techno>]} desc="Description test"></Project>);
    projects.push(<Project key='4' id='4' name='Simulation nounou' path='jeux.jpg' logos={[<Techno key='1' name='Unreal Engine' path='ue.svg'></Techno>]} desc="Description test"></Project>);
    projects.push(<Project key='5' id='5' name='MyRPG' path='jeux.jpg' logos={[<Techno key='1' name='Unreal Engine' path='ue.svg'></Techno>]} desc="Description test"></Project>);
    projects.push(<Project key='6' id='6' name='ESP' path='jeux.jpg' logos={[<Techno key='1' name='Unreal Engine' path='ue.svg'></Techno>]} desc="Description test"></Project>);

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