import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
        <main>
            <div className="container">
                <div className="hero">
                    <div className="hero__box">
                        <h1>IT курсы в <br/> Ташкенте</h1>
                        <p>Нам доверяют уже больше 4 лет</p>

                        <div className="hero__btns">
                            <button>Получить консулбтацию</button>
                            <button>Записаться на бесплатный урок</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>
  )
}

export default Hero