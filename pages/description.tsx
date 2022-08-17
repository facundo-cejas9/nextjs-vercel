import Link from 'next/link'
import React from 'react'
import { MainLayout } from '../components/Layout/MainLayout'


const description = () => {
  return (
    <MainLayout>
        <h1 className='title'>Description Page</h1>
        <h1 className='title'>
        Ir a <Link href="/">Home</Link>
        </h1>

        <p className='description' >
          Get started by editing{' '}
          <code className="code">pages/description.js</code>
        </p>
    </MainLayout>
  )
}

export default description