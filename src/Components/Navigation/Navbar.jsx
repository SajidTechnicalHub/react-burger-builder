import React from 'react'
import {NavLink} from 'react-router-dom'
import burger from '../Images/burger.png';
const Navbar = () => {
    return (
        <>
          <section>
         <nav className="navbar navbar-expand-md navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <NavLink className=" " to="/">
                        <span className=" d-flex burger-img align-items-lg-center">
                            <img src={burger} className="align-items-sm-center"  alt="Burger Logo" width="43px" height="28px" ></img>
                        </span>
                    </NavLink>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0 ">
                    <NavLink  to="/">
                        <span className=" d-flex sidebar-img align-items-lg-center">
                            <img src={burger} className="align-items-sm-center"  alt="Burger Logo" width="43px" height="28px" ></img>
                        </span>
                    </NavLink>
                    <li className="nav-item active">
                        <NavLink exact activeClassName="active-menu" className="nav-link "  to="/">Burger Builder</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink exact activeClassName="active-menu" className="nav-link" to="/login">Login</NavLink>
                    </li>
                    
                    </ul>
                    
                </div>
             </nav>
            
         </section>
              
        </>
    )
}

export default Navbar;
