import React from "react";
import Link from 'next/link'

export default function Header() {
    return(
        <React.Fragment>
            <header>
                <h1><Link href="/">PELLÉ Servan</Link></h1>
                <div id="navbar">
                    <Link href="/">Home</Link>
                    <Link href="/about">Resume</Link>
                    <Link href="/project">Projects</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </header>
        </React.Fragment>
    )
}