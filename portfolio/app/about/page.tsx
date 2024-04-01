import React from "react";
import styles from "./styles.module.css";

export default function Page() {
    return (
        <div className={styles.mainContainer}>
            <h2 className={styles.h2}>About Me</h2>
            <div>
                <p>Hey everyone 👋 !</p>
                <p>I&#39;m Servan Pellé, a data enthusiast and aspiring <span>Junior Data Scientist</span>. I&#39;m determined to further my studies by embarking on a <span>PhD</span> journey in <span>Artificial Intelligence</span>.</p>
                <p>After two years of preparatory classes, I specialized in <span>Data Engineering</span> at <span>Télécom Saint-Étienne</span>. My professional experience at <span>STMicroelectronics</span> in the <span>R&D</span> department involved developing model optimization tools, resulting in a <span>scientific article</span> set to be published in 2024.</p>
                <p>These experiences have deepened my passion for <span>Artificial Intelligence</span>, and I&#39;m driven to contribute to its advancement through a <span>PhD</span> program. I&#39;m excited to tackle new challenges and continue learning.</p>
            </div>
            <div className={styles.skillContainer}>
                <div className={styles.techSkillContainer}>
                    <h2 className={styles.title}>Technical Skills</h2>
                    <div>
                        <h3 className={styles.h3}>🧠 Machine Learning Frameworks</h3>
                        <p>PyTorch, TensorFlow, Keras, Scikit-Learn</p>
                    </div>
                    <div>
                        <h3 className={styles.h3}>👨‍💻 Programming Languages</h3>
                        <p>Python, C, C++, Java</p>
                    </div>
                    <div>
                        <h3 className={styles.h3}>💾 Database Systems</h3>
                        <p>MySQL, DjangoDB, MongoDB, MariaDB</p>
                    </div>
                    <div>
                        <h3 className={styles.h3}>🛜 Web Development</h3>
                        <p>Flask, NextJS, Angular, VueJS, Laravel</p>
                    </div>
                    <div>
                        <h3 className={styles.h3}>♾️ DevOps</h3>
                        <p>Docker, API, Git, GitLab</p>
                    </div>
                    <div>
                        <h3 className={styles.h3}>🗣️ Languages as Fluent</h3>
                        <p>French, English</p>
                    </div>
                </div>
                <div>
                    <div className={styles.areaContainer}>
                        <h2 className={styles.title}>Area of Expertise</h2>
                        <div>
                            <h3 className={styles.h3}>🧠 AI Engineering</h3>
                        </div>
                        <div>
                            <h3 className={styles.h3}>📊 Data Science & Statistics</h3>
                        </div>
                        <div>
                            <h3 className={styles.h3}>👨‍💻 Software Prototyping</h3>
                        </div>
                        <div>
                            <h3 className={styles.h3}>👏 Team Leadership</h3>
                        </div>
                    </div>
                    <div className={styles.areaContainer}>
                        <h2 className={styles.title}>Hobbies</h2>
                        <div>
                            <h3 className={styles.h3}>🎸 Playing & Listening Music</h3>
                        </div>
                        <div>
                            <h3 className={styles.h3}>✈️ Traveling</h3>
                        </div>
                        <div>
                            <h3 className={styles.h3}>👨‍💻 3D Printing</h3>
                        </div>
                        <div>
                            <h3 className={styles.h3}>🏍️ Restauration of Vintage Vehicles</h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.border}></div>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        <span className={styles.circle}>
                            <span className={styles.innerCircle}></span>
                        </span> 
                        Article
                    </h2>
                    <p>📑 Co-author : Analytical Model of SRAM Min to Predict Reliability and Process Impact (will be published in 2024)</p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.border}></div>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        <span className={styles.circle}>
                            <span className={styles.innerCircle}></span>
                        </span> 
                        Education
                    </h2>
                    <p className={styles.description}>
                        <h3>🏫 Institut Mines-Télécom - Télécom Saint-Étienne</h3>
                        <h4>Data Engineer</h4>
                        <p>
                            <i>2021 - 2024, Saint-Étienne, France</i><br />
                            <br />
                            • General student education : Mathematics, Physics, Data Science, Computer Science, Engineering Science, Finance & Management…
                        </p>
                    </p>
                    <p className={styles.description}>
                        <h3>🏫 Lycée Aristid Briand</h3>
                        <h4>Preparatory Class - TSI</h4>
                        <p>
                            <i>2019 - 2021, Saint-Nazaire, France</i><br />
                            <br />
                            • Selective 2-years program, offering intensive preparation to enter the French « Grande Écoles ».
                        </p>
                    </p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.border}></div>
                <div className={styles.content}>
                    <h2 className={styles.title}>
                        <span className={styles.circle}>
                            <span className={styles.innerCircle}></span>
                        </span> 
                        Work Experience
                    </h2>
                    <p className={styles.description}>
                        <h3>💻 STMicroelectronics</h3>
                        <h4>Apprentice Data Engineer - Full-Stack Software Engineer & Trainer</h4>
                        <p>
                            <i>Since January 2022, Crolles, France</i><br />
                            <br />
                            • Development of an optimization tool.<br />
                            • Led developing tool architecture & UX design.<br />
                            • Writing a scientific article about the project, presented at the International Integrated Reliability Workshop, Stanford university, USA.<br />
                            • Tech skills : Python, Scikit-Learn, Numpy, Scipy, Simpy, Qt, Pandas, Git.</p>
                    </p>
                    <p className={styles.description}>
                        <h3>💻 STMicroelectronics</h3>
                        <h4>Apprentice Data Engineer - Supervising Workshop</h4>
                        <p>
                            <i>Since January 2022, Crolles, France</i><br />
                            <br />
                            • Supervision of the international teams involved in creating, modifying and/or using the files that are part of the standardizing work.<br />
                            • First RISEForum prize, an international in-house program designed to rewards to the most dynamic & innovated projects.
                        </p>
                    </p>
                    <p className={styles.description}>
                        <h3>💻 Missillac Marine Service</h3>
                        <h4>Web Master - Full-Stack Development</h4>
                        <p>
                            <i>Since November 2023, Saint-Étienne, France</i>
                            <br />
                            • Designed & implemented a complete website, including design, technology choices & the implementation of necessary features.<br />
                            • Managed the entire web development process, from initial planning to the successful launch of the site.<br />
                            • Tech skills: HTML, CSS, JavaScript, VueJS, Visual Studio, GitHub.<br />
                            • missillac-marine-service.com
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
}
