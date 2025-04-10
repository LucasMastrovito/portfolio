import './techno.scss';

function Techno(props) {
    return (
        <div className="techno">
            <div className='icon-container'>
                <div className='glow-circle'></div>
                <img className="icon" alt={props.name} src={`${process.env.PUBLIC_URL}/logo/` + props.path} />
            </div>
            <p className='outline'>{props.name}</p>
        </div>
    )
}

export default Techno;