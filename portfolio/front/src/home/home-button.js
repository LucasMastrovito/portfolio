import { useNavigate } from "react-router-dom";

function HomeButton(props) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.redirect);
    }

    return (
        <div id="home-btn" onClick={handleClick}>
            <p>{props.title}</p>
        </div>
    )
}

export default HomeButton;