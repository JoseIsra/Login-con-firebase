import React from 'react'
import {useHistory } from 'react-router-dom'
import appFirebase from '../firebase';




export const Home = () => {
    const history = useHistory();

    const closeSession =()=>{
        appFirebase.auth().signOut()
        .then(()=>{
            history.push('/signin')
        }).catch(err => console.log(err))
    }

    return (
        <div className="home">
            <h1>WELCOME MY BOY</h1>
            <button onClick={closeSession}>SIGN OUT OF HERE</button>
        </div>
    )
}
