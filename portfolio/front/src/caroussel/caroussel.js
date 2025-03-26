import { useEffect, useState } from 'react';
import './caroussel.scss';

function Caroussel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const handleIndexChange = (e) => {
            slide(parseInt(e.detail));
        };
        window.addEventListener("updateCaroussel", handleIndexChange);

        return() => {
            window.removeEventListener("updateCaroussel", handleIndexChange);
        };
    }, [index]);

    const slide = (newIndex) => {
        const divs = document.querySelectorAll('div[class^="c-"]');
        if (index !== null) {
            for (let i = index; i !== newIndex; index > newIndex ? i-- : i++) {
                divs[i].style.transform = `translateX(calc(100%*${Math.abs(i - newIndex)} * ${index > newIndex ? 1 : -1}))`;
            }
            divs[newIndex].style.transform = `translateX(0)`;
        }
        setIndex(newIndex);
    };

    return (<div></div>)
}

export default Caroussel;