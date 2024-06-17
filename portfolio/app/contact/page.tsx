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
                    <p>✉️ pelle.servan@hotmail.fr</p>
                </div>
                <div className={styles.contactItem}>
                    <p>📞 06 51 31 32 24</p>
                </div>
                <div className={styles.contactItem}>
                    <p>🏠 Nantes/Saint-Étienne, France</p>
                </div>
                <div className={styles.contactItem}>
                    <p><a href="https://www.linkedin.com/in/servan-pelle">🔗 LinkedIn</a></p>
                </div>
                <div className={styles.contactItem}>
                    <p><a href="https://github.com/pelleservan">🔗 GitHub</a></p>
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
