import Image from 'next/image'
import { Inter } from 'next/font/google'
import Login from '@/components/Login'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return ( <>
    <h1 className='font-bold text-4xl text-red-900'>Hello world</h1>
    {/* <Login /> */}
    <nav>
      <Link href={'/'}>Home</Link>
      <Link href={'/loginPage'}>Login</Link>
    </nav>
  </>
  )
}
