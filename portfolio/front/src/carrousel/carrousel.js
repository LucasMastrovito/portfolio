import { useEffect, useRef, useState } from 'react';
import './carrousel.scss';

function Carrousel(props) {
    const id = props.id;
    const ref = useRef(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const slide = (newIndex) => {
            const divs = Array.from(ref.current.parentNode.children).filter(
                (el) => el !== ref.current && el.matches('div[class^="c-"]')
            );
            if (divs.length > 0) {
            if (newIndex === divs.length) {
                newIndex = 0;
            } else if (newIndex < 0) {
                newIndex = divs.length - 1;
            }
            if (index !== null) {
               for (let i = 0; i !== divs.length; i++) {
                    divs[i].style.transform = `translateX(${(i * 100) - (newIndex * 100)}%)`;
               }
            }
            setIndex(newIndex);
            window.dispatchEvent(new CustomEvent("newIndexCarroussel", { detail: newIndex }));
        }
        };

        const handleIndexChange = (e) => {
            if (e.detail.id === id) {
                if (e.detail.index === '+') {
                    slide(index + 1);
                } else if (e.detail.index === '-') {
                    slide(index - 1);
                } else {
                    slide(parseInt(e.detail.index));
                }
            }
        };
        window.addEventListener("updateCaroussel", handleIndexChange);

        return() => {
            window.removeEventListener("updateCaroussel", handleIndexChange);
        };
    }, [index, id]);

    return (<div ref={ref} id='carrousel'></div>)
}

export default Carrousel;