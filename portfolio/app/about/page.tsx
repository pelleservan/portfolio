import React from "react";
import styles from "./styles.module.css";

export default function Page() {
    return (
        <div className={styles.mainContainer}>
            <h2 className={styles.h2}>About Me</h2>
            <div>
                <p>Hey everyone 👋 !</p>
                <p>I&#39;m Servan Pellé, a data enthusiast and aspiring <span className={styles.highlight}>Junior Data Scientist</span>. My passion for data analysis and its vast possibilities drives me to seek employment in this field.</p>
                <p>After two years of preparatory classes, I specialized in <span className={styles.highlight}>Data Engineering</span> at <span className={styles.highlight}>Télécom Saint-Étienne</span>. My professional experience at <span className={styles.highlight}>STMicroelectronics</span> in the <span className={styles.highlight}>R&D</span> department involved developing model optimization tools, resulting in a <span className={styles.highlight}>scientific article</span> set to be published in 2024.</p>
                <p>These experiences have deepened my passion for <span className={styles.highlight}>data analysis</span>, and I am driven to contribute to its advancement. I am excited to tackle new challenges, continue learning, and apply my skills in <span className={styles.highlight}>data analysis</span> to make meaningful contributions to the field.</p>
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
                            <h3 className={styles.h3}>📊 Data Science & Statistics</h3>
                        </div>
                        <div>
                            <h3 className={styles.h3}>🧠 AI Engineering</h3>
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
                    <p className={styles.description}>
                        <h3>📑 Analytical Model of SRAM Min to Predict Reliability and Process Impact</h3>
                        <h4>Co-author</h4>
                        <p>
                            <i><span className={styles.date}>2023</span>, Crolles, France</i><br />
                            <br />
                            • 2023 IEEE International Integrated Reliability Workshop (IIRW) | 979-8-3503-2727-4/23/$31.00 ©2023 IEEE | DOI: 10.1109/IIRW59383.2023.10477717
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
                        Education
                    </h2>
                    <p className={styles.description}>
                        <h3>🏫 Institut Mines-Télécom - Télécom Saint-Étienne</h3>
                        <h4>Data Engineer</h4>
                        <p>
                            <i><span className={styles.date}>2021 - 2024</span>, Saint-Étienne, France</i><br />
                            <br />
                            • General student education : <span className={styles.skill}>Mathematics</span>, Physics, <span className={styles.skill}>Data Science</span>, <span className={styles.skill}>Computer Science</span>, Engineering Science, Finance & Management…
                        </p>
                    </p>
                    <p className={styles.description}>
                        <h3>🏫 Lycée Aristid Briand</h3>
                        <h4>Preparatory Class - TSI</h4>
                        <p>
                            <i><span className={styles.date}>2019 - 2021</span>, Saint-Nazaire, France</i><br />
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
                        <h3>💪🏻 Peaceful Productivity Coach</h3>
                        <h4>Apprentice Data Engineer - <span className={styles.post}>Data Analysis</span></h4>
                        <p>
                            <i><span className={styles.date}>Jun 2024</span>, Prague, Czech Republic</i><br />
                            <br />
                            • Build <span className={styles.skill}>data analysis</span> from data provided by chanel platform (youtube, mail, potcast, blog...).<br />
                            • <span className={styles.skill}>Data analysis</span> to improve chanels performances.<br />
                        </p>
                    </p>
                    <p className={styles.description}>
                        <h3>💻 STMicroelectronics</h3>
                        <h4>Apprentice Data Engineer - <span className={styles.post}>Data Analysis</span></h4>
                        <p>
                            <i>Since <span className={styles.date}>January 2021</span>, Crolles, France</i><br />
                            <br />
                            • Improve <span className={styles.skill}>data analysis</span> methods.<br />
                            • Develop <span className={styles.skill}>data analysis</span> flow templates.<br />
                            • Support for <span className={styles.skill}>data analysis</span> campaigns.<br />
                        </p>
                    </p>
                    <p className={styles.description}>
                        <h3>💻 STMicroelectronics</h3>
                        <h4>Apprentice Data Engineer - <span className={styles.post}>Full-Stack Software Engineer & Trainer</span></h4>
                        <p>
                            <i>Since <span className={styles.date}>January 2022</span>, Crolles, France</i><br />
                            <br />
                            • <span className={styles.skill}>Sofware development</span> of an optimization tool.<br />
                            • Led developing <span className={styles.skill}>software architecture</span> & <span className={styles.skill}>UX design</span>.<br />
                            • Writing a scientific article about the project, presented at the International Integrated Reliability Workshop, Stanford university, USA.<br />
                            • Tech skills : Python, Scikit-Learn, Numpy, Scipy, Simpy, Qt, Pandas, Git.</p>
                    </p>
                    <p className={styles.description}>
                        <h3>💻 STMicroelectronics</h3>
                        <h4>Apprentice Data Engineer - <span className={styles.post}>Workshop Supervisor</span></h4>
                        <p>
                            <i>Since <span className={styles.date}>January 2022</span>, Crolles, France</i><br />
                            <br />
                            • Supervision of the international teams involved in creating, modifying and/or using the files that are part of the standardizing work.<br />
                            • First RISEForum prize, an international in-house program designed to rewards to the most dynamic & innovated projects.
                        </p>
                    </p>
                    <p className={styles.description}>
                        <h3>🛥️ Missillac Marine Service</h3>
                        <h4>Web Master - <span className={styles.post}>Full-Stack Development</span></h4>
                        <p>
                            <i>Since <span className={styles.date}>November 2023</span>, Saint-Étienne, France</i>
                            <br />
                            • <span className={styles.skill}>Designed</span> & <span className={styles.skill}>implemented</span> a complete website, including design, technology choices & the implementation of necessary features.<br />
                            • Managed the entire <span className={styles.skill}>web development</span> process, from initial planning to the successful launch of the site.<br />
                            • Tech skills: HTML, CSS, JavaScript, VueJS, Visual Studio, GitHub.<br />
                            • <a href="https://missillac-marine-service.com" target="_blank">🔗 missillac-marine-service.com</a>
                        </p>
                    </p>
                </div>
            </div>
        </div>
    );
}
