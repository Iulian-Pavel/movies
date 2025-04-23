import { useState } from "react";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import styles from "../styles/Navbar.module.scss";
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => setIsOpen(!isOpen);

  return (
    <>
      <nav
        className={`${styles.navbar} ${isOpen ? styles.navbar_responsive : ""}`}
      >
        <div className={styles.logo}>
          <img src={logo} alt="Logo" />
        </div>
        <ul className={styles.nav_list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">Movies</Link>
          </li>
          <li>
            <Link to="/people">People</Link>
          </li>
        </ul>
        {isOpen ? (
          <IoClose className={styles.navmenu_icon} onClick={toggleNavbar} />
        ) : (
          <RxHamburgerMenu
            className={styles.navmenu_icon}
            onClick={toggleNavbar}
          />
        )}
      </nav>
    </>
  );
}

export default Navbar;
