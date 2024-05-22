import Project1 from './components/Project1'
import Project2 from './components/Project2'
import Project3 from './components/Project3'


import './portfolio.css'

function Portfolio() {
    return (
    <div id="portfolio">

    <h2 id="portfolio-title">My Portfolio</h2>

    <h3 id="portfolio-title-2">See Some of the Work That Ive Done</h3>

    <section className="portfolio-section">

        <Project1 />

        <Project2 />

        <Project3 />

    </section>

    </div>
    )
  }
  
  export default Portfolio