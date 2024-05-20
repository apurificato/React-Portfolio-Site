import Project1 from './components/Project1'
import Project2 from './components/Project2'
import Project3 from './components/Project3'


import './portfolio.css'

function Portfolio() {
    return (
    <section id="portfolio" className="portfolio-section">

        <Project1 />

        <Project2 />

        <Project3 />

    </section>
    )
  }
  
  export default Portfolio