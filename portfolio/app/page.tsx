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

          <div id='head-container'>
            <div>
              <h1>PELLÉ Servan - <span className="post">Junior Data Analyst</span></h1>
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

          <div>
            <p>
                I&#39;m a <span className="highlight">Junior Data Analyst</span> deeply passionate about <span className="highlight">data analysis</span> and its applications. With a three-year apprenticeship at <span className="highlight">IMT - Télécom Saint-Étienne</span> and <span className="highlight">STMicroelectronics</span>, I&#39;ve developed a strong foundation in data handling and analysis.
            </p>
            <p>
                Transitioning from a two-year <span className="highlight">CPGE</span> preparatory class, I joined <span className="highlight">IMT - Télécom Saint-Étienne</span> for a <span className="highlight">Data Engineering</span> program. This equipped me with expertise in building data pipelines, databases, and data warehouses, ensuring data availability and quality for analytical processes.
            </p>
            <p>
                During this program, I joined the <span className="highlight">Research and Development</span> department at <span className="highlight">STMicroelectronics</span>, where I applied classroom concepts to real-world projects, significantly enhancing my analytical skills.
            </p>
          </div>

          <hr className="pageDivider" />

          <div id='sections'>
            <div className="container">
              <a href="/about" className="link">About</a>
              <Image
                src="/img/cv.jpg"
                alt="resume Image"
                className="image"
                height={200}
                width={100}
                style={{ height: '200px', width: 'auto', objectFit: 'cover', borderRadius: '10px' }}
              />

            </div>

            
            <div className="container">
              <Link href="/project" className="link">Project</Link>
              <Image 
                src="/img/project.jpg" 
                alt="project Image" 
                className="image"
                height={200}
                width={100}
                style={{ height: '200px', width: 'auto', objectFit: 'cover', borderRadius: '10px' }}/>
            </div>

            <div className="container">
              <Link href="/contact" className="link">Contact</Link>
              <Image 
                src="/img/contact.jpg" 
                alt="contact Image" 
                className="image"
                height={200}
                width={100}
                style={{ height: '200px', width: 'auto', objectFit: 'cover', borderRadius: '10px' }}/>
            </div>
          </div>

          <hr className="pageDivider" />

          <div className="network-container">
            <Link href="https://github.com/pelleservan">
                <div className="container">
                    <Image 
                        src="/img/github.png" 
                        alt="GitHub" 
                        className="image"
                        height={96}
                        width={96}
                        style={{ height: '96px', width: '96px', objectFit: 'cover'}}
                    />
                </div>
            </Link>
            <Link href="https://www.linkedin.com/in/servan-pelle">
                <div className="container">
                    <Image 
                        src="/img/linkedin.png" 
                        alt="LinkedIn" 
                        className="image"
                        height={96}
                        width={96}
                        style={{ height: '96px', width: '96px', objectFit: 'cover'}}
                    />
                </div>
            </Link>
          </div>


        </div>

    </React.Fragment>
  )
}
