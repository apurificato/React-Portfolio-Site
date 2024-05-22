
import Navigation from './Navigation'

function Header() {
    return (
    <header>
        <div className='brand'>
            <a href='/'>
                <img src='/AP-logo.svg'></img>
            </a>

            <Navigation />
        </div>
    </header>
    )
  }
  
  export default Header