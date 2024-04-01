// Page.js
import React from "react";
import Image from "next/image";
import styles from "./styles.module.css";

export default function Page() {
    return (
        <div className={styles.container}>
            <div className={styles.leftContainer}>
                <h1>Contact Me !</h1>
                <div className={styles.contactItem}>
                    <Image
                        src="/img/email.png"
                        width={20}
                        height={20}
                        alt="email"
                        style={{ marginRight: '10px'}}
                    />
                    <p>pelle.servan@hotmail.fr</p>
                </div>
                <div className={styles.contactItem}>
                    <Image
                        src="/img/phone.png"
                        width={20}
                        height={20}
                        alt="phone"
                        style={{ marginRight: '10px'}}
                    />
                    <p>06 51 31 32 24</p>
                </div>
                <div className={styles.contactItem}>
                    <Image
                        src="/img/place.png"
                        width={20}
                        height={20}
                        alt="location"
                        style={{ marginRight: '10px'}}
                    />
                    <p>Nantes/Saint-Étienne, France</p>
                </div>
                <div className={styles.contactItem}>
                    <Image
                        src="/img/linkedin.png"
                        width={20}
                        height={20}
                        alt="linkedin"
                        style={{ marginRight: '10px'}}
                    />
                    <p><a href="https://www.linkedin.com/in/servan-pelle">LinkedIn</a></p>
                </div>
                <div className={styles.contactItem}>
                    <Image
                        src="/img/github.png"
                        width={20}
                        height={20}
                        alt="github"
                        style={{ marginRight: '10px'}}
                    />
                    <p><a href="https://github.com/pelleservan">GitHub</a></p>
                </div>
            </div>
            <div className={styles.rightContainer}>
                <Image
                    src="/img/memoji.png"
                    width={200}
                    height={0}
                    alt="memoji"
                    style={{ width: '70%', height: 'auto', margin: 'auto'}}
                />
            </div>
        </div>
    );
}
