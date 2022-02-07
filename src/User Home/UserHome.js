import React, { useState } from 'react';
import "./userHome.css"
import UserNav from '../User Nav/UserNav';
import { useNavigate } from 'react-router';

import { useAuth } from '../Firebase';
import Cardd from '../Card/Cardd';

const UserHome = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({});

    
    const currentUser = useAuth();

    


    return (
        <div>
            {currentUser!=null?null:navigate("/")}
            <UserNav />
            <br /><br />
            <Cardd />
        </div>
    )
};

export default UserHome;
