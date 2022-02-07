import React, { useRef, useState } from 'react';
import Nav from '../Nav/Nav';
import "./signUp.css";
import { signUp, useAuth } from '../Firebase';
import fireDB from '../Firebase';
import { useNavigate } from 'react-router';
import img1 from "./Images/1.png"

const SignUp = () => {

    const navigate = useNavigate();

    const currentUser = useAuth();
    const [loading, setLoading] = useState(false);

    const emailRef = useRef();
    const passwordRef = useRef();
    const cpasswordRef = useRef();

    const values = {
        fname: '',
        lname: '',
        email: '',
        password: '',
        cpassword: '',
        mobile: '',
        age: '',
        state: '',
        city: ''
    }

    const [initialState, setInitialState] = useState({});
    const { fname, lname, email, password, cpassword, mobile, age, state, city } = initialState;

    const handelInputChange = (e) => {
        let { name, value } = e.target;
        setInitialState({
            ...initialState,
            [name]: value,
        })
    }

    async function handelSignUp() {

        setLoading(true);
        if (passwordRef.current.value === cpasswordRef.current.value) {
            try {

                // add the userEmail & Password to Firebase
                await signUp(emailRef.current.value, passwordRef.current.value);

                // Send Data to Real-Time Database
                fireDB.database().ref().child(`Firebase-Auth-Project`).child(`${initialState.mobile}`).set(initialState, (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        alert("Signed-Up Successfully 👍👍👍");
                        
                        setInitialState({
                            fname: '',
                            lname: '',
                            email: '',
                            password: '',
                            cpassword: '',
                            mobile: '',
                            age: '',
                            state: '',
                            city: ''
                        })
                        navigate("/logIn")
                    }

                })
            } catch {
                alert("Maybe you have used a weak password or any other error may have occured\n....tryagain")
            }
        } else {
            alert("Incorrect Password")
        }
        setLoading(false);
    }

    return (
        <div>
            <Nav />
            <div className="login-container">
                <div className="login-box">

                    {/* Loader */}
                    {/* <div class="loadingio-spinner-wedges-1t1qaiowjqw"><div class="ldio-ji08m5az9n">
                        <div><div><div></div></div><div><div></div></div><div><div></div></div><div><div></div></div></div>
                    </div></div> */}

                    <img src={img1} className="img1" />

                    {/* Name */}
                    <div className="name-txt-box">
                        <input className="inp-txt  first-name" placeholder="First Name" name="fname" value={fname} onChange={handelInputChange} />
                        <input className="inp-txt  last-name" placeholder="Last Name" name="lname" value={lname} onChange={handelInputChange} />
                    </div>

                    {/* Email */}
                    <div className="email-txt-box">
                        <input ref={emailRef} type="email" className="inp-txt email" placeholder="email" name="email" value={email} onChange={handelInputChange} />
                    </div>

                    {/* Password */}
                    <div className="password-txt-box">
                        <input type="password" ref={passwordRef} className="inp-txt password" name="password" value={password} placeholder="Password" onChange={handelInputChange} />
                        <input type="password" ref={cpasswordRef} className="inp-txt cpassword" name="cpassword" value={cpassword} placeholder="Confirm Password" onChange={handelInputChange} />
                    </div>

                    {/* Details */}
                    <div className="details-txt-box">
                        <input className="inp-txt signup-mobile-no" placeholder="Mobile Number" name="mobile" value={mobile} onChange={handelInputChange} />
                        <input className="inp-txt age" placeholder="age" name="age" value={age} onChange={handelInputChange} />
                    </div>

                    {/* Address */}
                    <div className="address-txt-box">
                        <input className="inp-txt state" autocomplete="off" placeholder="state" name="state" value={state} onChange={handelInputChange} />
                        <input className="inp-txt city" autocomplete="off" placeholder="city" name="city" value={city} onChange={handelInputChange} />
                    </div>
                    <button disabled={loading} className="signUp-btn" onClick={handelSignUp}>SignUp</button>
                </div>
            </div>
            <p className="login-txt">Already have an account <a href="/logIn">Log-In Now</a></p>
        </div>
    )
};

export default SignUp;
