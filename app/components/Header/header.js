'use client'
import Link from 'next/link'
import './header.css'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Header() {
  const [session, setSession] = useState(false)
  const [usuario, setUsuario] = useState("")
  const router = useRouter()
  const handleClick = () => {
    router.push('/login')
  }

  const handleLogout = () => {
    localStorage.removeItem('session')
    localStorage.removeItem('user')
    setSession(false)
    // router.push('/')
  }


  useEffect(() => {
    const session = localStorage.getItem('session')
    const user = localStorage.getItem('user')
    console.log('session', session);

    if (session) {
      setSession(true)
      setUsuario(JSON.parse(user))
    } else {
      setSession(false)
    }
  }, [])
  return (
    <header className="header">
      <section className="header-logo">
        <Link href="/">
          <div className="logo">
            <img src="/logo.png" alt="logo" width="200px" />
          </div>
        </Link>
        <div className="header-text">
          electron
        </div>
      </section>
      <section className="header-menu">
        <div className="container-sesion">
        <section className="sesion">
          {session ? <h3>Hi!! {usuario}</h3> : ""}
        </section>
          <button className='btn-1' onClick={() => handleClick()}>Sing in</button>
          <button className='btn-2' onClick={() => handleLogout()}>log out</button>
        </div>
      </section>
    </header>
  )
} 