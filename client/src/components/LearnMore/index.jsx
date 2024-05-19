import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'
import './learnMore.css'

function LearnMore() {
    return (
<>
    <div>
        <h2>This Site Was Created With:</h2>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </div>
      <h1>Vite + React</h1>
      <div className="card">
        <a href='/'>
          <button>Go Back Home</button>
        </a>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
</>
    )
  }
  
  export default LearnMore