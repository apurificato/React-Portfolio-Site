import Title from './components/Title'
import Button from './components/Button'
import Technologies from './components/Technologies'

import './hero.css'

function Hero() {
    return (
    <div>
        <section className="hero">

            <Title />

            <Button />

        </section>
        <section>

            <Technologies />

        </section>
    </div>
    )
  }
  
  export default Hero
  