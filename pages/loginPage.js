import Login from '@/components/Login'
import Link from 'next/link'
import React from 'react'

const loginPage = () => {
  return (
    <div>
      <h1>Hello, this is login page</h1>
      <Login className={'p-2 w-12 h-2 border'}/>
      <Link href={'/register'}>Register User</Link>
    </div>
  )
}

export default loginPage
