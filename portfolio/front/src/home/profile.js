import HomeButton from './home-button';

function Profile() {
    return(
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
    )
}

export default Profile;