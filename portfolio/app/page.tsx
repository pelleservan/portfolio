import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image' 
 
export const metadata: Metadata = {
  title: 'PELLE Servan',
}

import React from 'react'
 
export default function Page() {
  return(
    <React.Fragment>
        <div id='container'>

          <div className='opento'>
            <h3>open to work 👋</h3>
          </div>

          <div id='head-container'>
            <div>
              <h1>PELLÉ Servan - <span className="post"><span className="balise">&lt;</span>Junior Data Analyst<span>{'/>'}</span></span></h1>
              <p>Welcome to my portfolio !</p>
            </div>
            <Image
              src="/img/hello.png"
              width={200}
              height={0}
              alt="memoji"
              style={{ height: 'auto', width: 'auto', borderRadius: '50%', right: '0'}}
            />

          </div>

          <div className='main-container'>
            <p className='text'>
                I&#39;m a <span className="highlight">Junior Data Analyst</span> deeply passionate about <span className="highlight">data analysis</span> and its applications. With a three-year apprenticeship at <span className="highlight">IMT - Télécom Saint-Étienne</span> and <span className="highlight">STMicroelectronics</span>, I&#39;ve developed a strong foundation in data handling and analysis.
            </p>
            <p className='text'>
                Transitioning from a two-year <span className="highlight">CPGE</span> preparatory class, I joined <span className="highlight">IMT - Télécom Saint-Étienne</span> for a <span className="highlight">Data Engineering</span> program. This equipped me with expertise in building data pipelines, databases, and data warehouses, ensuring data availability and quality for analytical processes.
            </p>
            <p>
                During this program, I joined the <span className="highlight">Research and Development</span> department at <span className="highlight">STMicroelectronics</span>, where I applied classroom concepts to real-world projects, significantly enhancing my analytical skills.
            </p>
          </div>

          <div id='sections'>
            <div className="container">
            <Link href="/about" className="link">About</Link> 
            </div>

            
            <div className="container">
              <Link href="/project" className="link">Projects</Link>
            </div>

            <div className="container">
              <Link href="/contact" className="link">Contact</Link>
            </div>
          </div>
        </div>

    </React.Fragment>
  )
}
