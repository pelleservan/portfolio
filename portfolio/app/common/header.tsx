import React from "react";
import Link from 'next/link'
import Image from 'next/image' 

export default function Header() {
    return(
        <React.Fragment>
            <header>
                <h1><Link href="/">PELLÉ Servan</Link></h1>
                <div id="navbar">
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/project">Projects</Link>
                    <Link href="/contact">Contact</Link>
                </div>
            </header>
        </React.Fragment>
    )
}