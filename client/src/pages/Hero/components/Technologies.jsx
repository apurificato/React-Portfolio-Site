import reactLogo from '/react.svg'
import viteLogo from '/vite.svg'

function Technologies() {
    return (
  <section id="learn-section">
    <div>
        <h5>This Site Was Created With:</h5>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
    </div>
      <h3>Vite + React</h3>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
  </section>
    )
  }
  
  export default Technologies