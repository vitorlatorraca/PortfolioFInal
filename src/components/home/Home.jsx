import React from 'react'
import Data from './Data'
import Social from './Social'
import "./home.css"

const Home = () => {
  return (
    <section className="home section" id="home">
        <div className="home__container container">
            <div className="home__content">
                <div className="home__left">
                    <Data/>
                    <Social/>
                </div>
                <div className="home__right">
                    <div className="home__img-wrapper">
                        <div className="home__img"></div>
                        <div className="home__img-blur"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home