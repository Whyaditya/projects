import { useState } from "react";
import { useReducer } from "react";
import { createContext } from "react";
import { Link, Form, redirect, useNavigate } from 'react-router-dom';


export const EcomStore = createContext({
    userDetail: {},
    loggedIn: false,
    logOut:()=>{},
    addUserDetail: () => { },
    regLog:()=>{},
    loginCall: () => { },
    addProduct: () => {},
})



const EcomProvider = ({ children }) => {

    let nav = useNavigate();

    let [userDetail, setUser] = useState({});
    let [loggedIn, setLoggedIn] = useState(false);


    const logOut = (data)=>{
        setUser(null);
        localStorage.clear();
        nav('/sign-up')
        setLoggedIn(data)
    }

    const regLog = (data)=>{
        setLoggedIn(data)
    }

    const addUserDetail = (data) => {
        setUser(data);
    }


    //login function   

    const loginCall = async (email, password) => {

        let result = await fetch("http://localhost:5000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        })
        result = await result.json();
        if (result.auth) {
            addUserDetail(result.user);
            localStorage.setItem('token', JSON.stringify(result.auth));
            setLoggedIn(true);
            nav('/home/profile');
        } else {
            alert('please enter detail correctly')
        }

    }


    //add products

    const addProduct = async (name,brand,price,category) => {

        let userId = userDetail._id;

        let result = await fetch("http://localhost:5000/add-product", {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ name, brand, price, category, userId })
        })
        result = await result.json();
        if (result) {
            console.log(result)
        } else {
            alert('failed')
        }
    }









    return (
        <EcomStore.Provider value={{ userDetail,loggedIn,logOut,regLog, addUserDetail, loginCall, addProduct }}>
            {children}
        </EcomStore.Provider>
    );
}

export default EcomProvider;