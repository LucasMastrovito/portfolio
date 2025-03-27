import './techno.scss';

function Techno(props) {
    return (
        <div className="techno">
            <div className='icon-container'>
                <img className="icon" alt={props.name} src={'/logo/' + props.path} />
            </div>
            <p>{props.name}</p>
        </div>
    )
}

export default Techno;