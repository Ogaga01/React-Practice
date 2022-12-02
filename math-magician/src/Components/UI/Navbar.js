import { Link } from "react-router-dom"
import styles from './Navbar.module.scss'

const Navbar = () => {
    return (
        <div className={`${styles.navdiv}`}>
            <h1>Math Magicians</h1>
            <nav className={styles.navitems}>
                <Link className={styles.navlink} to='/'>Home</Link>
                <Link className={styles.navlink} to='/Calculator'>Calculator</Link>
                <Link className={styles.navlink} to='/Quotes'>Quotes</Link>
            </nav>
        </div>
    )
}

export default Navbar