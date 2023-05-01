import logo from '../assets/logo.svg';
import '../styles/NavBar.css';

/**
 * Return the website's header
 */
function NavBarX() {
  return (
      <header className="sportsee-header">
        <img src={logo} alt='Logo SportSee' />
        <nav className='sportsee-navbarx'>
            <ol>
                <li>Accueil</li>
                <li>Profil</li>
                <li>Réglage</li>
                <li>Communauté</li>
            </ol>
        </nav>
      </header>
  );
}

export default NavBarX;