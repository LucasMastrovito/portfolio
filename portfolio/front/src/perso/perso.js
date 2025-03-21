import Project from '../project/project.js';
import './perso.scss';
import ProjectPage from '../projectPage/projectPage.js';

function Perso() {
    const projects = [];

    projects.push(<Project name='Mad Cleaners' path='/madcleaners.gif' logos={['ue.svg']} desc="Mad Cleaners est un jeu vidéo d'horreur avec une touche décalée, jouable de 1 à 4 joueurs, ce jeu vous garanti une expérience pleine d'émotions entre amis. Vous incarnez une équipe de nettoyeurs embauchée par une mystérieuse entreprise qui a besoin de vous pour nettoyer des laboratoires secret dans lesquels des expériences ont mal tournées. Vous aurez un temps imparti pour mener à bien vos missions, et bien sûr, des créatures dangereuses essaieront de vous tuer. Gagner de l'expérience, un salaire, et équipez vous pour réussir des missions de plus en plus difficiles."></Project>);
    projects.push(<Project name='Marvel vs DC' path='/mvd.jpg' logos={['ue.svg']} desc="Marvel vs DC est un jeu de carte en ligne qui se joue en 1 contre 1. Le but est de construire son deck efficacement afin de réduire les points de vie de l'adversaire à 0. Il y a plusieurs type de carte, les cartes Personnage qui représentent des personnages des comics Marvel ou DC, ce sont des cartes que vous pouvez invoquer pour attaquer avec. Les cartes Magie vous aideront grâce à différents effets en jeu, et les cartes Equipement renforceront vos Personnages. Plus de 250 cartes sont disponnibles dans le jeu, et vous pouvez également personnaliser votre profil."></Project>);
    projects.push(<Project name='Pokemon Ultimate' path='/pu.jpg' logos={['rpgmaker.png', 'ruby.svg']} desc="Pokemon Ultimate est un fangame qui reprend presque tous les anciens Pokémons et personnages de la license officielle, et qui explore une toute nouvelle histoire. En parcourant une nouvelle région vous devrez affronter de nouveaux ennemies et récolter les 8 badges d'arène pour accéder à la ligue et devenir Maître Pokémon. De nouvelle mécanique vous attende également dans ce jeu pour les fans les plus assidus de la license."></Project>);

    return (
        <div>
            <ProjectPage projects={projects}></ProjectPage>
        </div>
    )
}

export default Perso;