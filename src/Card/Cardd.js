import React, { useEffect, useState } from 'react';
import fireDB, { useAuth } from '../Firebase';
import "./card.css";
import { useNavigate } from 'react-router';



const Cardd = () => {

    const navigate = useNavigate();

    const [data, setData] = useState({});



    useEffect(async () => {
        await fireDB.database().ref().child(`Firebase-Auth-Project/${localStorage.getItem('user_mobile')}`).on("value", (snapshot) => {
            if (snapshot.val() != null) {
                setData({
                    ...snapshot.val(),
                });
            } else {
                snapshot({});
            }
        });
        // console.log(data.fname)
    }, []);

    return (
        <div>
            {/* <p>{localStorage.getItem('user_mobile')}</p> */}
            <div className="card-container">
                <div className="name-head">
                    <h1>Hello {data.fname} 👋 </h1>
                </div>

                <div className="card-box">
                    <div className="name-box">
                        <p className="box-title">Name</p><p className="line-name">-</p>
                        <div className="name-box-names">
                            <p className="name-box-first"> {data.fname}</p>
                            <p className="name-box-last">{data.lname}</p>
                        </div>
                    </div>
                    <div className="email-box">
                        <p className="box-title">Email</p><p className="line-email">-</p>
                        <p className="email-box-email">{data.email}</p>
                    </div>
                    <div className="details-box">
                        <p className="box-title">Mobile</p><p className="line-mobile">-</p>
                        <p className="details-box-mobile">{data.mobile}</p>
                        <p className="box-title box-title-age">Age</p><p className="line-age">-</p>
                        <p className="details-box-age">{data.age}</p>
                    </div>
                    <div className="address-box">
                        <p className="box-title-state">State</p><p className="line-state">-</p>
                        <p className="address-box-state">{data.state}</p>
                        <p className="box-title-city">City</p><p className="line-city">-</p>
                        <p className="address-box-city">{data.city}</p>
                    </div>
                </div>
                {/* </Card> */}
            </div>
        </div>
    )
};

export default Cardd;
