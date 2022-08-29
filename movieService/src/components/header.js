import styles from './header.css';
import potato from '../images/ptato2.png';
import { Link } from "react-router-dom";

function Header() {
    return (
        <header id="style">
            <Link to={`/`}><img src={potato} alt="potato" /></Link>
        </header>
    )
}

export default Header;