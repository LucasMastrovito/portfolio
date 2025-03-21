import Project from '../project/project.js';
import ProjectList from '../project/projectList.js';
import { useState } from 'react';
import './perso.scss';

function Perso() {
    const projects = [];
    const [index, setIndex] = useState(0);

    projects.push(<Project name='Mad Cleaners' path='/madcleaners.gif' logos={['ue.svg']} desc="Mad Cleaners est un jeu vidéo d'horreur avec une touche décalée, jouable de 1 à 4 joueurs, ce jeu vous garanti une expérience pleine d'émotions entre amis. Vous incarnez une équipe de nettoyeurs embauchée par une mystérieuse entreprise qui a besoin de vous pour nettoyer des laboratoires secret dans lesquels des expériences ont mal tournées. Vous aurez un temps imparti pour mener à bien vos missions, et bien sûr, des créatures dangereuses essaieront de vous tuer. Gagner de l'expérience, un salaire, et équipez vous pour réussir des missions de plus en plus difficiles."></Project>);
    projects.push(<Project name='Marvel vs DC' path='/mvd.jpg' logos={['ue.svg']} desc="Test description"></Project>);
    projects.push(<Project name='Pokemon Ultimate' path='/pu.jpg' logos={['rpgmaker.png', 'ruby.svg']} desc="Pokemon Ultimate est un fangame qui reprend presque tous les anciens Pokémons et personnages de la license officielle, et qui explore une toute nouvelle histoire. En parcourant une nouvelle région vous devrez affronter de nouveaux ennemies et récolter les 8 badges d'arène pour accéder à la ligue et devenir Maître Pokémon. De nouvelle mécanique vous attende également dans ce jeu pour les fans les plus assidus de la license."></Project>);

    const changeProject = (e) => {
        if (e.target.alt === 'right') {
            setIndex(index === projects.length - 1 ? 0 : index + 1);
        } else {
            setIndex(index === 0 ? projects.length - 1 : index - 1);
        }
    }

    const clickOnProject = (e) => {
        console.log(e.target.alt)
        setIndex(parseInt(e.target.alt));
    }
    return (
        <div id='perso-container'>
            {projects[index]}
            <ProjectList click={changeProject} change={clickOnProject} projects={projects} index={index}></ProjectList>
        </div>
    )
}

export default Perso;