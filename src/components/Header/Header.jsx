import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <>
        <header>
            <div className="container">
                <div className="head">
                    <h1 className='logo'>It-academy</h1>

                    <nav className='nav'>
                        <a href="">Курсы</a>
                        <a href="">Бесплатный урок</a>
                        <a href=""> Филиалы</a>
                        <a href="">Контакты</a>
                    </nav>

                    <button className='btn'>Позвонить</button>
                </div>
            </div>
        </header>
    </>
  )
}

export default Header