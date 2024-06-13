import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Page() {
    return (
        <div className={styles.container}>
            <h1 className={styles.projectCathegory}>Machine Learning Projects</h1>
            <hr className={styles.pageDivider} />
            <div className={styles.projectsWrapper}>
                <div className={styles.projectLink}>
                    <Link href="/project/mnist_on_reduced_mnist">
                        <div className="project-container">
                            <div className={styles.imageContainer}>
                                <Image 
                                    src="/img/mnist.jpeg" 
                                    alt="project Image" 
                                    className="image"
                                    layout="fill"
                                    objectFit="cover"
                                    style={{ borderRadius: '10px 10px 0 0' }}
                                />
                            </div>
                            <div className={styles.projectDescription}>
                                <h2>CNN on Reduced MNIST</h2>
                                <p>Developing a Convolutional Neural Network (CNN) model to classify MNIST dataset images using only 100 labeled samples.</p>
                                <div className={styles.progressWrapper}>
                                    <p>Completed : </p>
                                    <div className={styles.progressBar1Container}>
                                        <div className={styles.progressBar1}></div>
                                    </div>
                                    <p>90%</p>
                                </div>
                                <div className={styles.competences}>
                                    <span className={styles.competence}>Neural Network - CNN</span>
                                    <span className={styles.competence}>Python</span>
                                    <span className={styles.competence}>PyTorch</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.projectLink}>
                    <Link href="https://github.com/pelleservan/BigDataProject">
                        <div className="project-container">
                            <div className={styles.imageContainer}>
                                <Image 
                                    src="/img/goblinexam.png" 
                                    alt="project Image" 
                                    className="image"
                                    layout="fill"
                                    objectFit="cover"
                                    style={{ borderRadius: '10px 10px 0 0' }}
                                />
                            </div>
                            <div className={styles.projectDescription}>
                                <h2>Voice Controlled Quiz</h2>
                                <p>Developing a voice controlled quiz using LSTM neral network and.</p>
                                <div className={styles.progressWrapper}>
                                    <p>Completed : </p>
                                    <div className={styles.progressBar1Container}>
                                        <div className={styles.progressBar1}></div>
                                    </div>
                                    <p>90%</p>
                                </div>
                                <div className={styles.competences}>
                                    <span className={styles.competence}>LSTM</span>
                                    <span className={styles.competence}>Python</span>
                                    <span className={styles.competence}>Flask</span>
                                    <span className={styles.competence}>MySQL</span>
                                    <span className={styles.competence}>MCV</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.projectLink}>
                    <Link href="/project/diabetes_prediction">
                        <div className="project-container">
                            <div className={styles.imageContainer}>
                                <Image 
                                    src="/img/diabets.jpg" 
                                    alt="project Image" 
                                    className="image"
                                    layout="fill"
                                    objectFit="cover"
                                    style={{ borderRadius: '10px 10px 0 0' }}
                                />
                            </div>
                            <div className={styles.projectDescription}>
                                <h2>Diabetes Prediction</h2>
                                <p>Building a Support Vector Machine (SVM) model to predict diabetes diagnosis.</p>
                                <div className={styles.progressWrapper}>
                                    <p>Completed : </p>
                                    <div className={styles.progressBar2Container}>
                                        <div className={styles.progressBar2}></div>
                                    </div>
                                    <p>30%</p>
                                </div>
                                <div className={styles.competences}>
                                    <span className={styles.competence}>Neural Network - SVM</span>
                                    <span className={styles.competence}>Python</span>
                                    <span className={styles.competence}>PyTorch</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <h1 className={styles.projectCathegory}>Data Analysis & Dataviz Projects</h1>
            <hr className={styles.pageDivider} />
            <div className={styles.projectsWrapper}>
                <div className={styles.projectLink}>
                    <Link href="https://f1-viz.vercel.app/">
                        <div className="project-container">
                            <div className={styles.imageContainer}>
                                <Image 
                                    src="/img/f1.jpeg" 
                                    alt="project Image" 
                                    className="image"
                                    layout="fill"
                                    objectFit="cover"
                                    style={{ borderRadius: '10px 10px 0 0' }}
                                />
                            </div>
                            <div className={styles.projectDescription}>
                                <h2>Formula One Data Analysis</h2>
                                <p>Use Kaggle formula1 dataset to develop web data anlisys and projections.</p>
                                <div className={styles.progressWrapper}>
                                    <p>Completed : </p>
                                    <div className={styles.progressBar2Container}>
                                        <div className={styles.progressBar2}></div>
                                    </div>
                                    <p>10%</p>
                                </div>
                                <div className={styles.competences}>
                                    <span className={styles.competence}>Next.js</span>
                                    <span className={styles.competence}>React.js</span>
                                    <span className={styles.competence}>Postgre</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={styles.projectLink}>
                    <Link href="https://github.com/pelleservan/formula1_dashboard.git">
                        <div className="project-container">
                            <div className={styles.imageContainer}>
                                <Image 
                                    src="/img/f1_performances.png" 
                                    alt="project Image" 
                                    className="image"
                                    layout="fill"
                                    objectFit="cover"
                                    style={{ borderRadius: '10px 10px 0 0' }}
                                />
                            </div>
                            <div className={styles.projectDescription}>
                                <h2>Formula One Dashboard</h2>
                                <p>Get Formula One data and use it to develop a dashboard</p>
                                <div className={styles.progressWrapper}>
                                    <p>Completed : </p>
                                    <div className={styles.progressBar1Container}>
                                        <div className={styles.progressBar1}></div>
                                    </div>
                                    <p>100%</p>
                                </div>
                                <div className={styles.competences}>
                                    <span className={styles.competence}>Tableau Desktop</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <h1 className={styles.projectCathegory}>Software Projects</h1>
            <hr className={styles.pageDivider} />
            <div className={styles.projectsWrapper}>
                <div className={styles.projectLink}>
                    <Link href="https://github.com/pelleservan/AES.git">
                        <div className="project-container">
                            <div className={styles.imageContainer}>
                                <Image 
                                    src="/img/chiff.jpg" 
                                    alt="project Image" 
                                    className="image"
                                    layout="fill"
                                    objectFit="cover"
                                    style={{ borderRadius: '10px 10px 0 0' }}
                                />
                            </div>
                            <div className={styles.projectDescription}>
                                <h2>AES Encryption</h2>
                                <p>Python-based AES encryption project with GUI for secure message encryption and decryption.</p>
                                <div className={styles.progressWrapper}>
                                    <p>Completed : </p>
                                    <div className={styles.progressBar1Container}>
                                        <div className={styles.progressBar1}></div>
                                    </div>
                                    <p>90%</p>
                                </div>
                                <div className={styles.competences}>
                                    <span className={styles.competence}>Python</span>
                                    <span className={styles.competence}>AES</span>
                                    <span className={styles.competence}>MCV</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
            <h1 className={styles.projectCathegory}>Web Projects</h1>
            <hr className={styles.pageDivider} />
            <div className={styles.projectsWrapper}>
                <div className={styles.projectLink}>
                    <Link href="https://missillac-marine-service.com/">
                        <div className="project-container">
                            <div className={styles.imageContainer}>
                                <Image 
                                    src="/img/boat.jpg" 
                                    alt="project Image" 
                                    className="image"
                                    layout="fill"
                                    objectFit="cover"
                                    style={{ borderRadius: '10px 10px 0 0' }}
                                />
                            </div>
                            <div className={styles.projectDescription}>
                                <h2>Web Master - Missillac Marine Service</h2>
                                <p>Managed Missillac Marine Service&#39;s web presence, overseeing needs analysis, and implementing optimal solutions for integration.</p>
                                <div className={styles.progressWrapper}>
                                    <p>Completed : </p>
                                    <div className={styles.progressBar3Container}>
                                        <div className={styles.progressBar3}></div>
                                    </div>
                                    <p>50%</p>
                                </div>
                                <div className={styles.competences}>
                                    <span className={styles.competence}>Angular</span>
                                    <span className={styles.competence}>OVH</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
  
