import React, { useEffect, useState } from 'react';
import "../CSS/signin.css";
import { useNavigate } from 'react-router-dom';

export default function Signin({ setConnected, setCurrentUser, users }) {
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPass, setLoginPass] = useState("");
    const [problem, setProblem] = useState("");

    const nav = useNavigate();
    
    useEffect(()=>{
        if(problem !== ""){
            setTimeout(() => {
                setProblem("");
            }, 4000);
        }
    },[problem])

    const validateLogin=(email, pass)=>{
        if(email==="" || pass === ""){
            setProblem("Please fill all the fields first!");
            alert("Please fill all the fields first!");
            return false;
        }
        const regex = /^(?=.*[!@#$%^&*])[A-Z][A-Za-z0-9!@#$%^&*]{8,33}$/;
        if(!email.includes("@") || !email.includes(".")){
            setProblem("Invalid Email");
            return false;
        }
        if(!pass.match(regex)){
            setProblem("Invalid Password");
            alert("Password must fit the next format:\n\n• Start with an upper case letter\n• Icludes [a-z/A-Z/0-9]\n• 10-35 length\n• Contains at least one special character [!@#$%^&*]");
            return false;    
        }
        return true;
    }
    const login=()=>{
        if(!validateLogin(loginEmail, loginPass)){
            return;
        }
        try{
            const newUser={
                email:loginEmail,
                pass: loginPass
            };
            const foundedUser= users.filter(user=>{
                return user.email===newUser.email && user.pass===newUser.pass
            })
            if(foundedUser){
                setConnected(true);
                setCurrentUser(foundedUser[0]);
                alert("Welcome!\n you are now connected and can start buying");
                nav("/online_shop");
                window.scrollTo({
                    top:0,
                    'behavior':'smooth'
                });
            }
        }
        catch(error){
            console.error("Error on login",error);
            return alert("Error on login\nSorry, something went wrong\nplease try again later");
        }
    }
  return (
    <div className='signin_container'>
        <h1 style={{margin:"0 auto 40px"}}>Sign in</h1>
        <form className="signin_form">
            <div className="signin_form_inputsDiv">
                <label htmlFor="signin_email">Email</label>
                <input name='signin_email' type='email' placeholder='Exmple: myName@mail.com' autoComplete='username' className='signin_inputs' onChange={(e)=>{setLoginEmail(e.target.value)}}/>
                <label htmlFor="signin_password">Password</label>
                <input name='signin_password' type='password' placeholder='Example: SomeP@$$w0rd123' autoComplete='current-password' className='signin_inputs' onChange={(e)=>{setLoginPass(e.target.value)}}/>
            </div>
            <p className='signin_problem'>{problem}</p>
            <button className='signin_btn' onClick={login}>Let's Go</button>
        </form>
    </div>
  )
}
