import { useState } from "react";
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

    for (let i = 1; i < 10; i++) {
        imgs.push(<Screen key={i} i={i} folder={props.folder}></Screen>);
    }

    return ( props.display ?
        <div id="screens-container">
            <Carrousel id={3}></Carrousel>
            {imgs}
            <button id="close-screens" onClick={props.toggle}>Retour</button>
            <CarrouselList id={3} style={{top: '50vh'}}></CarrouselList>
        </div>
        : null
    )
}

export default Screens;