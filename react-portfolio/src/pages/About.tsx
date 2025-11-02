import styles from "../App.module.css"
const About = () => {
    return (
        <div className={styles.aboutContent}>
            <h1>Over mij</h1>
            <section className={styles.aboutContainer}>
                <article>
                    <h2>Wie ben ik</h2>
                    <p>Ik ben Ömer, student aan AP hogeschool en volg graduaat programmeren. Ik vind het leuk om me bezig te houden met programmeren, het is iets wat ik al van jong graag doe. Buiten het programmeren speel ik video games zoals black ops, fifa  etc. . Verder voetbal ik graag in mijn vrijde tijd</p>
                </article>

                <article>
                    <h2>Mijn vaardigheden</h2>
                    <ul>
                        <li>React & Typescript</li>
                        <li>Node.js & Express</li>
                        <li>CSS / Tailwind / ThymeLeaf</li>
                        <li>SQL / PostgreSQL</li>
                        <li>MongoDB</li>
                        <li>springboot Java</li>
                        <li>C# OOP, Testing</li>
                    </ul>
                </article>

                <article>
                    <h2>mijn doelen</h2>
                    <p>Mijn doelen zijn om een full stack developer te worden en ervaring opdoen met moderne frameworks. Ik wil me ook verdiepen in AI. </p>
                </article>

            </section>
       
        </div>
    )
}

export default About;