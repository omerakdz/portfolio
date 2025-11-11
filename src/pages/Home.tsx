import styles from "../App.module.css";
import githubIcon from "../assets/github.png";
import linkedInIcon from "../assets/linkedin.png"
const Home = () => {
    return (
            <article className={styles.home}>
                <h1>Hallo, ik ben Ömer</h1>
                <p>Ik ben een student van AP hogeschool en zit nu in mijn 2de jaar graduaat programmeren.</p>
                <section className={styles.homeIcons}>
                     <a href="https://github.com/omerakdz"><img style={{width: "50px"}} src={githubIcon} alt="Github link" /></a>
                     <a href="https://www.linkedin.com/in/%C3%B6mer-akdeniz/"><img style={{width: "50px"}} src={linkedInIcon} alt="LinkedIn link" /></a>
                </section>
              
            </article>
    )
}


export default Home;