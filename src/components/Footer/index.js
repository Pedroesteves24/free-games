import './styles.scss'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';


export function Footer() {
    return(
        <footer>
            <div className="email"><a href="https://www.freetogame.com/" target="_blank" rel="noreferrer">Free To Game Site</a></div>
            <ul className="social">                                      
                <li><a href="https://www.facebook.com/ " target="_blank" rel="noreferrer"> <BsFacebook/> </a></li>
                <li><a href="https://www.instagram.com/" target="_blank" rel="noreferrer"> <BsInstagram/> </a></li>
            </ul>
        </footer>
    )
}