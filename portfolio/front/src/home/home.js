import { useLocation } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import HomeButton from './home-button';
import './home.scss';
import { useEffect, useState } from 'react';
import Caroussel from '../caroussel/caroussel';

function Home() {
    const location = useLocation();
    const root = document.documentElement;

    document.addEventListener("mousemove", evt => {
        let x = evt.clientX / window.innerWidth;
        let y = evt.clientY / window.innerHeight;
        root.style.setProperty("--mouse-x", x);
        root.style.setProperty("--mouse-y", y);
    });

    useEffect(() => {
        if (location.hash !== '') {
            window.dispatchEvent(new CustomEvent("updateCaroussel", { detail: location.hash.slice(1)}));
        } else {
            window.dispatchEvent(new CustomEvent("updateCaroussel", { detail: '0'}));
        }
    }, [location])

    return (
        <div id='home-container'>
            <Navbar></Navbar>
            <Caroussel></Caroussel>
            <div id='profile' className='c-1'>
                <div id='entitle'>
                    <h1 id='name'>Lucas</h1>
                    <h1 id='name'>Mastrovito</h1>
                    <h2 id='job'>Développeur</h2>
                    <h3 id='description'>Spécialisé dans le développement 3D, je suis tout autant capable de créer des jeux vidéo que des expérience XR.</h3>
                    <h3 id='description'>Mes compétences ne s'arrêtant pas là, je suis également capable de développer un site web de A à Z, ainsi que des applications mobile ou logiciels.</h3>
                    <h3 id='description'>Voici mes projets:</h3>
                </div>
                <div id='home-btn-container'>
                    <HomeButton title='Pro' redirect='/pro'></HomeButton>
                    <HomeButton title='Perso' redirect='/personnal'></HomeButton>
                </div>
            </div>
            
            <div id='competencies' className='c-2 page'>
                <div id='entitle'>
                    <h1 id='name'>Competences</h1>
                </div>
                
            </div>

            <div id='contact' className='c-3 page'>
                <div id='entitle'>
                    <h1 id='name'>Contact</h1>
                    <div id='links-container'>
                        <h3 className='links outline' style={{margin: '0'}}>lucas.mastrovito@epitech.eu</h3>
                        <a className='links outline' href='https://www.linkedin.com/in/lucas-mastrovito/'>LinkedIn</a>
                        <a className='links outline' href='https://github.com/LucasMastrovito/'>GitHub</a>
                    </div>
                    <form id='contact-form' className='card' action="mailto:lucas.mastrovito@epitech.eu" method="post" enctype="text/plain">
                        <div className='input'>
                            <label className='outline' for='name'>Nom: </label>
                            <input type="text" name="name" />
                        </div>
                        <div className='input'>
                            <label className='outline' for='mail'>Mail: </label>
                            <input type="text" name="mail" />
                        </div>
                        <div className='input' style={{height: '40%'}}>
                            <label className='outline' for='comment'>Message: </label>
                            <textarea style={{height: '60%'}} type="text" name="comment" size="50" />
                        </div>
                        
                        <input className='form-btn' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Home;