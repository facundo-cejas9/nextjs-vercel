
import Link from 'next/link'
import { MainLayout } from '../components/Layout/MainLayout'


export default function index() {
 
  return (
    <MainLayout>
        <h1 className='title'>Home Page</h1>
        <h1 className='title' >
          Ir a <Link href="/about">about</Link>
        </h1>
        
    
        <p className='description' >
          Get started by editing{' '}
          <code className="code">pages/index.js</code>
        </p>
    </MainLayout>
  )
}
