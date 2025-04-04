import { useNavigate } from 'react-router-dom';
import './navbar.scss';

function NavbarButton(props) {
    const navigate = useNavigate();

    const onClick = () => {
        navigate(props.path);
    }
    return(
        <div style={{height: '100%'}}>
            <button id='navbtn' onClick={onClick}>{props.name}</button>
        </div>
    )
}

function Navbar() {
    const navigate = useNavigate();

    const onClick = () => {
        navigate('/');
    }

    return (
        <div id='navbar'>
            <img alt='home' id='navbtn' className='home-icon' src={process.env.PUBLIC_URL + '/pp.jpg'} onClick={onClick} style={{height: '48px', border: '2px solid grey'}} />
            <div id='navcontainer'>
                <NavbarButton name='Accueil' path='/'></NavbarButton>
                <NavbarButton name='Compétences' path='/#1'></NavbarButton>
                <NavbarButton name='Contact' path='/#2'></NavbarButton>
                <NavbarButton name='Projets pro' path='/pro'></NavbarButton>
                <NavbarButton name='Projets perso' path='/personnal'></NavbarButton>
            </div>
        </div>
    )
}

export default Navbar;