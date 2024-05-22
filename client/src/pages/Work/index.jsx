import WorkItem1 from './components/WorkItem1'
import WorkItem2 from './components/WorkItem2'
import WorkItem3 from './components/WorkItem3'


import './work.css'

function Work() {
    return (
    <div id="portfolio">

    <h2 id="portfolio-title">My Portfolio</h2>

    <h3 id="portfolio-title-2">See Some of the Work That Ive Done</h3>

    <section className="portfolio-section">

        <WorkItem1 />

        <WorkItem2 />

        <WorkItem3 />

    </section>

    </div>
    )
  }
  
  export default Work