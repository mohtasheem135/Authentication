import React from 'react';
import "./nav.css";

const Navbar = () => {
    return (
        <div>
            <div className="navbar-container">
                <ul className="nav-ul">
                    <li className="nav-li nav-li-pyq"><a href="/">Home</a></li>
                    <li className="nav-login-li nav-login-li-pyq"><a href="/logIn">Login</a></li>
                    {/* <li className="nav-login-li nav-login-li-pyq"><a href="/userlogin"></a></li> */}
                    {/* <li className="nav-login-li nav-login-li-pyq"><a href="/pyq">PYQ</a></li> */}

                </ul>
            </div>
        </div>
    )
}

export default Navbar