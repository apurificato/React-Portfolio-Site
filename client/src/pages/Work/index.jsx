import WorkItem from './components/WorkItem'


import './work.css'

function Work() {
    const workItems = [
        {
            title: 'Wine & Dine App',
            subText: 'Front-End application website created for user to search for recipe generation and drink pairings.',
            repoURL: 'https://github.com/apurificato/recipe-app-group-project',
            demoURL: 'https://apurificato.github.io/recipe-app-group-project/'
        },
        {
            title: 'WinBig Digital Casino',
            subText: 'Full-Stack application website created to play digital casino games and place live instant bets.',
            repoURL: 'https://github.com/vgalante2/WinBig',
            demoURL: 'https://win-big-76ecc78832f3.herokuapp.com'
        },
        {
            title: 'Note Taker',
            subText: 'Simple webpage application that enables user to input form data that generates and saves notes in the browser.',
            repoURL: 'https://github.com/apurificato/Note-Taker',
            demoURL: 'https://note-taker-s8qu.onrender.com/'
        },
        {
            title: 'Employee DB App',
            subText: 'Back-end Node.js application built using Inquirer prompt and PostgreSQL database for management of employee data.',
            repoURL: 'https://github.com/apurificato/Employee-Management-Application',
            demoURL: '#'
        },
        {
            title: 'Tech Blog Site',
            subText: 'Simple Full Stack blog website focused on the technology surrounding web development and design.',
            repoURL: 'https://github.com/apurificato/Tech-Blog',
            demoURL: '#'
        },
        {
            title: 'README File Generator',
            subText: 'Program that generates new README files, utilizing JavaScript, Node.js, and inquirer.js for functioning and testing.',
            repoURL: 'https://github.com/apurificato/README-Generator',
            demoURL: '#'
        }
    ]

    return (
    <div id="portfolio">

    <h2 id="portfolio-title">My Portfolio</h2>
    <h3 id="portfolio-title-2">See Some of the Work That Ive Done</h3>

    <section className="work portfolio-section">

        {workItems.map((itemObj, index) => (
            <WorkItem key={index} itemObj={itemObj} />
        ))}

    </section>

    </div>
    )
  }
  
  export default Work