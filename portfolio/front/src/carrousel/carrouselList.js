import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

/* function SlideBtn(props) {
    console.log(props)
    const path = window.getComputedStyle(props.divs[props.index]).getPropertyValue('background-image').slice(4, -1).split('/')[4].replace('"', '');
    const [scale, setScale] = useState(parseFloat(props.scale));

    const click = (e) => {
        window.dispatchEvent(new CustomEvent("updateCaroussel", { detail: props.index }));
    }

    return (
        <div id="slide-btn" className="shadow" onClick={click}
            style={{transform: `scale(${scale})`}}
            onMouseEnter={() => setScale(parseFloat(props.scale) + 0.3)}
            onMouseLeave={() => setScale(parseFloat(props.scale))}
        >
            <img id="slide-pic" alt={props.index} src={'/bg/' + path} />
        </div>
    )
} */

function CarrouselList(props) {
    const [index, setIndex] = useState(0);
    //const divs = document.querySelectorAll('div[class^="c-"]');
    const location = useLocation();
    const [active, setActive] = useState(true);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
    }, [location.pathname]);
    
    useEffect(() => {
            const updateIndex = (e) => {
                setIndex(e.detail);
            };
            window.addEventListener("newIndexCarroussel", updateIndex);
    
            return() => {
                window.removeEventListener("newIndexCarroussel", updateIndex);
            };
    }, [index]);

    useEffect(() => {
        const updateActive = (e) => {
            setActive(e.detail);
        };
        window.addEventListener("activeCarrouselList", updateActive);

        return() => {
            window.removeEventListener("activeCarrouselList", updateActive);
        };
    }, [active]);

    const click = (e) => {
        window.dispatchEvent(new CustomEvent("updateCaroussel", {
            detail: {
                id: props.id,
                index: e.target.alt === 'right' ? '+' : '-'
            }
        }))
    }

    return ( isLoaded && active ?
        <div id="carrousellist" style={props.style}>
            <img alt="left" className="arrow" style={{marginLeft: '3vw'}} src={`${process.env.PUBLIC_URL}/arrow_left.png`} value='left' onClick={click} />
            {/* <div className="flex" style={{width: 'auto', gap: '30px'}}>
                <SlideBtn index={index > 0 ? index - 1 : divs.length - 1} divs={divs} scale='1'></SlideBtn>
                <SlideBtn index={index} divs={divs} scale='1.5'></SlideBtn>
                <SlideBtn index={index < divs.length - 1 ? index + 1 : 0} divs={divs} scale='1'></SlideBtn>
            </div> */}
            <img alt="right" className="arrow" style={{marginRight: '3vw'}} src={`${process.env.PUBLIC_URL}/arrow_right.png`} value='right' onClick={click} />
        </div> : null
    )
}

export default CarrouselList;