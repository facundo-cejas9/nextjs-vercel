import Link from 'next/link'
import React from 'react'
import { DarkLayout } from '../components/Layout/DarkLayout'
import { MainLayout } from '../components/Layout/MainLayout'

const about = () => {
  return (
    <>

        <h1 className='title'>About Page</h1>
        <h1 className='title'>
        Ir a <Link href="/">Home</Link>
        </h1>

        <p className='description' >
          Get started by editing{' '}
          <code className="code">pages/about.js</code>
        </p>   

    </>
  )
}


about.getLayout = function getLayout( page: JSX.Element ) {
  return (
    <MainLayout>

      <DarkLayout>
          { page }
      </DarkLayout>

    </MainLayout>
  )
}

export default about

