import { NavLink, Outlet } from "react-router-dom";
import styles from "./RootLayout.module.css";
import img from "../assets/Foto.png"
import { useContext, useEffect, useState } from "react";
import {ThemeContext} from "../providers/ThemeProvider"
import BackgroundParticles from "./BackgroundParticles";

const RootLayout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const {theme, toggle} = useContext(ThemeContext);

    return(
        <>
            <div className={`${styles.container}`}>
                <button className={styles.themeToggle} onClick={toggle}>
                    {theme === "light" ? "🌙" : "☀️"}
                </button>
              
               <button
                    className={`${styles.hamburger} ${styles[theme]}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
                <nav className={`${styles.nav} ${isOpen ? styles.open : ""}`}>
                  
                    <img className={styles.personalImg} src={img} alt="personal img" />
                    <div style={{border: "1px solid white", width: "100%"}}></div>
                    <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/">Home</NavLink>
                    <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/about">about</NavLink>
                    <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/projects">projects</NavLink>
                    <NavLink className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink} to="/contact">contact</NavLink>
                </nav>
                
                <main className={`${styles.content} ${styles[theme]}`}>
                    <BackgroundParticles />
                    <div className={styles.contentInner}>
                        <Outlet />
                    </div>
                </main>

            </div>
        
        </>
    )
}

export default RootLayout;