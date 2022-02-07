import React, { useState } from 'react';
import "./userNav.css";
import { useNavigate } from 'react-router';
import { signUp, logOut, logIn, useAuth } from '../Firebase';

const UserNav = () => {

    const navigate = useNavigate();
    
    const [loading, setLoading] = useState(false);

    async function handelLogOut() {
        setLoading(true);
        localStorage.setItem('user_mobile', "");
        try {
            await logOut();
            // alert("You are Out");
        } catch {
            alert("Error in Logging Out !")
        }
        setLoading(false);
    }

    return (
        <div>
            <div className="navbar-user-container">
                <ul className="nav-user-ul">
                    <li className="nav-user-li"><a href="/userhome">Home</a></li>
                    <li className="nav-user-login-li"><a style={{ cursor: 'pointer' }} onClick={handelLogOut}>Log Out</a></li>
                </ul>

            </div>


        </div>
    )
}

export default UserNav