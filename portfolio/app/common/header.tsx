import React from "react";
import Link from 'next/link'

export default function Header() {
    return(
        <React.Fragment>
            <header>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/project">Project</Link>
                <Link href="/contact">Contact</Link>
            </header>
        </React.Fragment>
    )
}