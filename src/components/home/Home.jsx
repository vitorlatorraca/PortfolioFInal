import React from 'react'
import Data from './Data'
import Social from './Social'
import CodeTerminal from './CodeTerminal'
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
                    <CodeTerminal />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home