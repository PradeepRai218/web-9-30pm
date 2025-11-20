import "./Header.css"

import logo from "../../assets/images/logo.svg"
function Header(){
      let cname="WsCubeTech"

    return(
        <header className="header">
            <div className="header-container">
                <h1>
                    <img src={logo} alt="" />
                    <img src="/images/ws-cube-white-logo.svg" alt="" />
                    {/* {cname} */}
                </h1>
                <nav className="nav-menu">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact</a>
                </nav>
            </div>
        </header>
    )
}

export {Header}