
import { Link } from 'react-router-dom';
import { useUserContext } from '../context/UserContext';
import styles from '../styles/Topbar.module.scss';

const Topbar: React.FC = () => {
  const { user, logout } = useUserContext();

  return (
    <header className={styles.topbar}>
      <div className={styles.logo}>HomeService</div>
      <nav>
        <ul className={styles.navLinks}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/about">About Us</Link></li>
          {user ? (
            <>
              <li>Hello, {user.username}</li>
              <li><button onClick={logout}>Logout</button></li>
            </>
          ) : (
            <li><Link to="/login">Login/Sign Up</Link></li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Topbar;
