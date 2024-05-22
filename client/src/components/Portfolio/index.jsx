import Project1 from './components/Project1'
import Project2 from './components/Project2'
import Project3 from './components/Project3'


import './portfolio.css'

function Portfolio() {
    return (
    <div id="portfolio">

    <h2 id="portfolio-title">See Some of the Work That Ive Done</h2>

    <section className="portfolio-section">

        <Project1 />

        <Project2 />

        <Project3 />

    </section>

    </div>
    )
  }
  
  export default Portfolio