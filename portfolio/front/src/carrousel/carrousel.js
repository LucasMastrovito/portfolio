import { useEffect, useState } from 'react';
import './carrousel.scss';

function Carrousel() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const slide = (newIndex) => {
            const divs = document.querySelectorAll('div[class^="c-"]');
            if (newIndex === divs.length) {
                newIndex = 0;
            } else if (newIndex < 0) {
                newIndex = divs.length - 1;
            }
            if (index !== null) {
                for (let i = index; i !== newIndex; index > newIndex ? i-- : i++) {
                    divs[i].style.transform = `translateX(calc(100%*${Math.abs(i - newIndex)} * ${index > newIndex ? 1 : -1}))`;
                }
                divs[newIndex].style.transform = `translateX(0)`;
            }
            setIndex(newIndex);
            window.dispatchEvent(new CustomEvent("newIndexCarroussel", { detail: newIndex }));
        };

        const handleIndexChange = (e) => {
            console.log(e.detail);
            if (e.detail === '+') {
                slide(index + 1);
            } else if (e.detail === '-') {
                slide(index - 1);
            } else {
                slide(parseInt(e.detail));
            }
        };
        window.addEventListener("updateCaroussel", handleIndexChange);

        return() => {
            window.removeEventListener("updateCaroussel", handleIndexChange);
        };
    }, [index]);

    return (<div id='carrousel'></div>)
}

export default Carrousel;