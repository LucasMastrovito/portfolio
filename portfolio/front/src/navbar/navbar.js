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
    return (
        <div id='navbar'>
            <div id='navcontainer'>
                <NavbarButton name='Accueil' path='/'></NavbarButton>
                <NavbarButton name='Projets pro' path='/pro'></NavbarButton>
                <NavbarButton name='Projets perso' path='/personnal'></NavbarButton>
                <NavbarButton name='Compétences' path='/#1'></NavbarButton>
                <NavbarButton name='Contact' path='/#2'></NavbarButton>
            </div>
        </div>
    )
}

export default Navbar;