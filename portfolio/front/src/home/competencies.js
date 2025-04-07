import Techno from "../techno/techno";

function Competencies() {
    const tech = [];

    tech.push(<Techno key='1' name='Unreal Engine' path='ue.png'></Techno>);
    tech.push(<Techno key='2' name='JavaScript' path='js.png'></Techno>);
    tech.push(<Techno key='3' name='HTML' path='html.png'></Techno>);
    tech.push(<Techno key='4' name='CSS' path='css.svg'></Techno>);
    tech.push(<Techno key='5' name='Sass' path='sass.png'></Techno>);
    tech.push(<Techno key='6' name='MongoDB' path='mongo.svg'></Techno>);
    tech.push(<Techno key='7' name='React' path='react.png'></Techno>);
    tech.push(<Techno key='8' name='AngularTS' path='angular.png'></Techno>);
    tech.push(<Techno key='9' name='NodeJS' path='node.png'></Techno>);
    tech.push(<Techno key='10' name='ExpressJS' path='express.png'></Techno>);
    tech.push(<Techno key='11' name='Java' path='java.png'></Techno>);
    tech.push(<Techno key='12' name='AndroidStudio' path='android.png'></Techno>);
    tech.push(<Techno key='13' name='C' path='c.png'></Techno>);
    tech.push(<Techno key='14' name='C++' path='cpp.png'></Techno>);
    tech.push(<Techno key='15' name='RPG Maker' path='rpgmaker.png'></Techno>);
    tech.push(<Techno key='16' name='Github' path='git.png'></Techno>);
    tech.push(<Techno key='17' name='Bash shell' path='bash.png'></Techno>);
    tech.push(<Techno key='18' name='Notion' path='notion.png'></Techno>);
    tech.push(<Techno key='19' name='Jira' path='jira.png'></Techno>);

    return (
        <div id='competencies' className='c-2 page'>
            <div id='entitle'>
                <h1 id='name'>Competences</h1>
                <h3 id='description'>Suite à mes nombreux projets d'études, personnels, et professionnels que j'ai eu la chance de réaliser en alternance et en CDI,<br></br>j'ai eu l'occasion d'expérimenter beaucoup de technologies et d'outils différents.</h3>
                <div id="tech-container" className="card">
                    {tech}
                </div>
            </div>
        </div>
    )
}

export default Competencies;