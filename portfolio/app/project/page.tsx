import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Page() {
    return (
        <html>
        <head>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Pelle-Servan-Portfolio</title>
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-VJRXTHCP3W"></script>
                <script dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'G-VJRXTHCP3W');
                `,
                }} />
        </head>
        <div className={styles.container}>
            <h1 className={styles.projectCathegory}><span className="balise">&lt;</span>Machine Learning Projects<span>{'/>'}</span></h1>
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
                                <h2><span className="balise">&lt;</span>CNN on Reduced MNIST<span>{'/>'}</span></h2>
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
                                <h2><span className="balise">&lt;</span>Voice Controlled Quiz<span>{'/>'}</span></h2>
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
                {/* <div className={styles.projectLink}>
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
                                <h2><span className="balise">&lt;</span>Diabetes Prediction<span>{'/>'}</span></h2>
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
                </div> */}
            </div>
            <h1 className={styles.projectCathegory}><span className="balise">&lt;</span>Data Analysis & Dataviz Projects<span>{'/>'}</span></h1>
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
                                <h2><span className="balise">&lt;</span>Formula One Data Analysis<span>{'/>'}</span></h2>
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
                                <h2><span className="balise">&lt;</span>Formula One Dashboard<span>{'/>'}</span></h2>
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
            <h1 className={styles.projectCathegory}><span className="balise">&lt;</span>Software Projects<span>{'/>'}</span></h1>
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
                                <h2><span className="balise">&lt;</span>AES Encryption<span>{'/>'}</span></h2>
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
            <h1 className={styles.projectCathegory}><span className="balise">&lt;</span>Web Projects<span>{'/>'}</span></h1>
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
                                <h2><span className="balise">&lt;</span>Web Master - Missillac Marine Service<span>{'/>'}</span></h2>
                                <p>Managed Missillac Marine Service&#39;s web presence, overseeing needs analysis, and implementing optimal solutions for integration.</p>
                                <div className={styles.progressWrapper}>
                                    <p>Completed : </p>
                                    <div className={styles.progressBar4Container}>
                                        <div className={styles.progressBar4}></div>
                                    </div>
                                    <p>100%</p>
                                </div>
                                <div className={styles.competences}>
                                    <span className={styles.competence}>Vue</span>
                                    <span className={styles.competence}>OVH</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </html>
    );
}
  
