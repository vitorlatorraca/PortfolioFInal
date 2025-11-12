import React from 'react'
import Data from './Data'
import Social from './Social'
import CodeTerminal from './CodeTerminal'
import FloatingElements from './FloatingElements'
import "./home.css"

const Home = () => {
  return (
    <section className="home section" id="home">
        <FloatingElements />
        <div className="home__container container">
            <div className="home__content">
                <div className="home__center">
                    <Data/>
                    <div className="home__interactive">
                        <CodeTerminal />
                        <Social/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home