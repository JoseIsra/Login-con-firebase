import React ,{ useState } from 'react'
import { useHistory } from "react-router-dom";
import appFirebase from '../firebase';

export const Signup = () => {
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

    const handleSubmit=(e)=>{
        e.preventDefault();
        appFirebase.auth()
        .createUserWithEmailAndPassword(user.email, user.password)
        .then(user => {
            console.log(user);
            setUser({
                email:'',
                password:''
            })
            history.push('/signin')
        })
    }
    
    return (
        <div className="signup">
            <h1>WELCOME TO THE APP CREATURE</h1>
            <h2>SIGNUP MY FRIEND 😁</h2>
            <form onSubmit={handleSubmit}>
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
            <button type="submit">SAVE USER</button>
            </form>
        </div>
    )
}
