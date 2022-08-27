import styles from './header.css';
import potato from '../images/ptato2.png';

function Header() {
    console.log("gay");
    return (
        <header id="style">
            <img src={potato} alt="potato" />
        </header>
    )
}

export default Header;