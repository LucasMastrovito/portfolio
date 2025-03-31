import Carrousel from "../carrousel/carrousel";
import CarrouselList from "../carrousel/carrouselList";

function Screen(props) {
    return (
        <div className={'c-' + props.i + ' screen'}>
            <img className="pic" alt={props.i} src={props.folder + props.i + '.png'} />
        </div>
    )
}

function Screens(props) {
    const imgs = [];

    for (let i = 1; i <= props.pics; i++) {
        imgs.push(<Screen key={i} i={i} folder={props.folder}></Screen>);
    }

    const click = (e) => {
        if (e.target.className.includes('screen')) {
            props.toggle(e);
        }
    }

    return ( props.display ?
        <div id="screens-container" onClick={click}>
            <Carrousel id={3}></Carrousel>
            {imgs}
            {/* <button id="close-screens" onClick={props.toggle}>Retour</button> */}
            <CarrouselList id={3} ></CarrouselList>
        </div>
        : null
    )
}

export default Screens;