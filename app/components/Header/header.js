'use client'
import './header.css'

export default function Header() {
    return (
        <header className="header">
          <section className="header-logo">
            <div className="logo">
              <img src="/logo.png" alt="logo"  width="200px"/>
            </div>
            <div className="header-text">
              electron
            </div>
          </section>
          <section className="header-menu">
            <div className="container-sesion">
              <button className='btn-1'>Sing in</button>
              <button className='btn-2'>registro</button>
            </div>
          </section>
        </header>
    )
} 