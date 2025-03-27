import { useEffect, useRef, useState } from 'react';
import './carrousel.scss';

function Carrousel(props) {
    const id = props.id;
    const ref = useRef(null);
    const [divs, setDivs] = useState([]);
    const [index, setIndex] = useState(0);

    const getDivs = () => {
        if (ref.current) {
            const siblings = Array.from(ref.current.parentNode.children).filter(
              (el) => el !== ref.current && el.matches('div[class^="c-"]')
            );
            setDivs(siblings);
          }
    }
    useEffect(() => {
        getDivs();
    }, [])
    useEffect(() => {
        const slide = (newIndex) => {
            getDivs();
            if (divs.length > 0) {
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
    }, [index, divs]);

    return (<div ref={ref} id='carrousel'></div>)
}

export default Carrousel;