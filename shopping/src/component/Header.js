import './header.css';

function Header() {
    return (
      <header className="header-container">
        <div className="logo-container">
            <div className="logo-img">
                <img src="logo.png" alt="logo"/>
            </div>
            <span className="logo-titie">COZ Shopping</span>
        
        </div>
        <img src="hamburger.png" alt="hamburger menu"/>

      </header>
    );
  }
  
  export default Header;
  