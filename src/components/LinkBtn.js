import { Link } from "react-router-dom";

function LinkBtn(props) {
    const linkBtnMap = props.mapBtn ? "btn-absolute" : ""
    return (
        <Link to={props.to} className={`link-btn ${linkBtnMap}`}>
            <span>{props.text}</span>
            <div className="link-img-wrapper"><img src={props.src} alt="" /></div>
        </Link>
    )
}

export default LinkBtn
