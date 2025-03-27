import { useLocation } from 'react-router-dom';
import Navbar from '../navbar/navbar';
import Competencies from './competencies.js';
import Contact from './contact.js';
import Profile from './profile.js';
import './home.scss';
import { useEffect } from 'react';
import Carrousel from '../carrousel/carrousel';

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
            <Carrousel></Carrousel>
            <Profile></Profile>
            <Competencies></Competencies>
            <Contact></Contact>
        </div>
    )
}

export default Home;