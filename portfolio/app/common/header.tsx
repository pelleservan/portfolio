import React from "react";
import Link from 'next/link'

export default function Header() {
    return(
        <React.Fragment>
            <header>
                <h1>Servan PELLÉ</h1>
                <div id="navbar">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/project">Project</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </header>
        </React.Fragment>
    )
}