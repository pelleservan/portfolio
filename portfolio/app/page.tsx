import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Next.js',
}

import React from 'react'
 
export default function Page() {
  return(
    <React.Fragment>

        <div id='container'>
          <h2>Home</h2>
        </div>

    </React.Fragment>
  )
}
