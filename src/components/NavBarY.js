import '../styles/NavBar.css';
import icon1 from '../assets/nb-icon1.svg';
import icon2 from '../assets/nb-icon2.svg';
import icon3 from '../assets/nb-icon3.svg';
import icon4 from '../assets/nb-icon4.svg';

/**
 * Return the website's aside bar
 */
function NavBarY() {
  return (
    <aside className='sportsee-aside'>
        <nav>
            <img src={icon1} alt="Icône qui prie" />
            <img src={icon2} alt="Icône qui nage" />
            <img src={icon3} alt="Icône qui fait du vélo" />
            <img src={icon4} alt="Icône d'haltère" />
        </nav>
        <p>Copyright, SportSee 2020</p>
    </aside>
  );
}

export default NavBarY;