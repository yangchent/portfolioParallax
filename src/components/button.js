import { Link } from 'react-router-dom';
import '../assets/css/button.css';

function Button(props){
    return(
        <div className='button_group'>
            <Link to={props.to} className="button">
            <div className="button__line"></div>
            <div className="button__line"></div>
            <span className="button__text">{props.children}</span>
            </Link>
        </div>
    )
}
export default Button;