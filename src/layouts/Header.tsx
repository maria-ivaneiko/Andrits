import React from 'react'

export default function Header() {
    return (
        <header className="header">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <div className="header-logo">
                    <a href="#">SunSat</a>
                </div>
                <nav className="nav">
                    <a href="#" className="nav-link">Головна</a>
                    <a href="#" className="nav-link">Про нас</a>
                    <a href="#" className="nav-link">Продукція</a>
                    <a href="#" className="nav-link">Гарантія</a>
                    <a href="#" className="nav-link">Відгуки</a>
                </nav>
            </div>
        </header>
    )
}
