import {NavLink} from "react-router-dom";
export const Header = () => {
  return (
    <>
        <header classNameName="container">
            <nav className="navbar navbar-expand-lg navbar-dark fw-bold" style={{backgroundColor:"#001F3F"}}>
                <div className="container-fluid">
                    <NavLink className="navbar-brand ms-5" to="/">Magar-shopping</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNav ">
                        <ul className="navbar-nav ms-auto me-5">
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/search">
                                    <i className="fas fa-search"></i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/cart">
                                    <i className="fas fa-shopping-cart"></i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/setting">
                                    <i className="fas fa-cogs"></i>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" aria-current="page" to="/profile">
                                    <i className="fas fa-user"></i>
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    </>
  )
}
