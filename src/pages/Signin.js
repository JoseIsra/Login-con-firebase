import React, { useState } from 'react'
import  { useHistory } from 'react-router-dom'
import appFirebase from '../firebase';

export const Signin = () => {
    const history = useHistory();
    const [user, setUser ] = useState({
        email:'',
        password:''
    });

const handleChange =(e)=>{
    setUser({
        ...user,
        [e.target.name]:e.target.value
    })
}

    const submitUser =(e)=>{
        e.preventDefault();
        appFirebase.auth()
        .signInWithEmailAndPassword(user.email, user.password)
        .then(user => {
            setUser({
                email:'',
                password:''
            })
            history.push('/home');
        })
    }


    return (
        <div className="sigin">
            <h2>NOW SIGNIN MY FRIEND 😁</h2>
            <form onSubmit={submitUser}>
            <div className="fields">
                <label>EMAIL</label>
                <input type="email"
                name="email"
                onChange={handleChange}
                placeholder="email..." />
            </div>
            <div className="fields">
                <label>PASSWORD</label>
                <input type="password"
                name="password"
                onChange={handleChange}
                placeholder="passw..." />
            </div>
            <button type="submit">GO THERE</button>
            </form>
        </div>
    )
}
