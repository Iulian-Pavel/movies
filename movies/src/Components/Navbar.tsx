import { useState } from "react";
import styles from "../styles/Navbar.module.scss";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpg";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";

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
            <a href="#">Movies</a>
          </li>
          <li>
            <a href="#">People</a>
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
