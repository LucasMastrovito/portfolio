function slideBtn(props) {

    const click = (e) => {
        window.dispatchEvent(new CustomEvent("updateCaroussel", { detail: 1 }));
    }

    return (
        <div id="project-btn" className="shadow" onClick={click}>
            <img id="project-pic" alt={props.index} src={props.projects[props.index].props.path} />
        </div>
    )
}

function CarrouselList(props) {
    const click = (e) => {
        console.log(e.target.alt)
        window.dispatchEvent(new CustomEvent("updateCaroussel", { detail: e.target.alt === 'right' ? '+' : '-' }));
    }

    return (
        <div id="projectlist">
            <img alt="left" className="arrow" src="/arrow_left.png" value='left' onClick={click} />
            <div className="flex" style={{width: 'auto', gap: '20px'}}>
                {/* <slideBtn index={props.index > 0 ? props.index - 1 : props.projects.length - 1} click={props.change} projects={props.projects}></slideBtn>
                <slideBtn index={props.index} click={props.change} projects={props.projects}></slideBtn>
                <slideBtn index={props.index < props.projects.length - 1 ? props.index + 1 : 0} click={props.change} projects={props.projects}></slideBtn> */}
            </div>
            <img alt="right" className="arrow" src="/arrow_right.png" value='right' onClick={click} />
        </div>
    )
}

export default CarrouselList;