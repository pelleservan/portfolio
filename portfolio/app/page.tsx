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
              <h1>Servan PELLÉ - Data Scientist</h1>
              <p>Wellcome into my portfolio !</p>
            </div>
            {/* <Image src="/img/memoji.png" alt="memoji Image" /> */}
            <Image
              src="/img/memoji.png"
              width={200}
              height={0}
              alt="memoji"
              style={{ height: '200px', width: 'auto', borderRadius: '50%', position: 'absolute', right: '0', top: '-50px' }}
            />

          </div>

          <div>
            
            <p>
              I am a <span>Data Scientist</span> with a strong passion for <span>Artificial Intelligence</span> and its applications. Having spent three years as an apprentice 
              between <span>IMT - Télécom Saint-Étienne</span> and <span>STMicroelectronics</span>, I am eager to deepen my knowledge through a <span>PhD</span> focused on 
              <span>Artificial Intelligence</span>.
            </p>

            <p>
              After two years in a <span>CPGE</span> preparatory class, I sought to transition into more practical training. This led me to join <span>IMT - Télécom Saint-Étienne</span> 
              to pursue a <span>Data Engineer</span> program. <span>Data Engineering</span> involves designing, building, and maintaining infrastructures and systems for collecting, storing, processing, 
              and analyzing large amounts of data. Throughout this training, I acquired <span>Expertise</span> in setting up and managing data pipelines, databases, data warehouses, and the necessary 
              tools and technologies to ensure data accessibility, reliability, security, and readiness for analysis by data analysts and scientists. In summary, this program has equipped me 
              with the skills needed to ensure <span>Data Availability and Quality</span>, empowering analytical processes and decision support within organizations.
            </p>

            <p>
              While undergoing this alternating training program, I had the opportunity to join the <span>Research and Development</span> department at <span>STMicroelectronics</span>. 
              This three-year experience allowed me, firstly, to apply the concepts studied in class in a concrete manner, and also to enhance my knowledge and skills to better meet 
              the imposed requirements. This experience stands as one of the most significant milestones in my journey for.
            </p>

          </div>

          <div id='sections'>
            <div className="container">
              <a href="/about" className="link">Resume</a>
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
          

        </div>

    </React.Fragment>
  )
}
