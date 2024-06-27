// Page.js
import React from "react";
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
        </html>
    );
}
