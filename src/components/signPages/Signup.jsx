import React, { useEffect, useState } from 'react';
import "../CSS/signup.css";
import { useNavigate } from 'react-router-dom';

export default function Signup({ setUsers, users }) {
    const [newFullName, setNewFullName] = useState("");
    const [newEmail, setNewEmail] = useState("");
    const [newPass, setNewPass] = useState("");
    const [newRePass, setNewRePass] = useState("");
    const [problem, setProblem] = useState("");

    const nav = useNavigate();

    useEffect(()=>{
        if(problem !== ""){
            setTimeout(() => {
                setProblem("");
            }, 4000);
        }
    },[problem])

    const validateUser=(name, email, pass, repass)=>{
        if(name === "" || email === "" || pass === "" || repass === ""){
            setProblem("Please fill all the fields first!");
            alert("Please fill all the fields first!");
            return false;
        }
        const passRegex = /^(?=.*[!@#$%^&*])[A-Z][A-Za-z0-9!@#$%^&*]{8,33}$/;
        const nameRegex = /^[A-Za-z/ /]{1,35}$/;
        if(pass !== repass){
            setProblem("Passwords is not match");
            return false;
        }
        if(!email.includes("@") || !email.includes(".")){
            setProblem("Invalid Email");
            return false;
        }
        if(!name.match(nameRegex)){
            setProblem("Invalid Name format");
            alert("Full Name must be only letters and spacing");
            return false;
        }
        if(!pass.match(passRegex)){
            setProblem("Invalid Password");
            alert("Password must fit the next format:\n\n• Start with an upper case letter\n• Icludes [a-z/A-Z/0-9]\n• 10-35 length\n• Contains at least one special character [!@#$%^&*]");
            return false;    
        }
        return true;
    }
    const addUser=()=>{

        if(!validateUser(newFullName, newEmail, newPass, newRePass)){
            alert("failed");
            return;
        }
        try{
            const newUser ={
                name:newFullName,
                email:newEmail,
                pass:newPass
            }
            setUsers([...users,newUser]);
            alert("Success!\nWe glad you decided to join us\nNow all you need to do is signin and you can start");
            nav("/online_shop/signin");
        }
        catch(error){
            console.error("Error on adding new user",error);
            return alert("Error on adding new user\nSorry, something went wrong\nplease try again later");
        }
    }
  return (
    <div className='signup_container'>
        <h1 style={{margin:"0 auto 40px"}}>Sign up</h1>
        <form className="signup_form">
            <div className="signup_form_inputsDiv">
                <label htmlFor="signup_name">Full Name</label>
                <input name='signup_name' type='text' placeholder='Exmple: Israel Israeli' autoComplete='username' className='signup_inputs' onChange={(e)=>{setNewFullName(e.target.value)}}/>
                <label htmlFor="signup_email">Email</label>
                <input name='signup_email' type='email' placeholder='Exmple: myName@mail.com' autoComplete='username' className='signup_inputs' onChange={(e)=>{setNewEmail(e.target.value)}}/>
                <label htmlFor="signup_password">Password</label>
                <input name='signup_password' type='password' placeholder='Example: SomeP@$$w0rd123' autoComplete='current-password' className='signup_inputs' onChange={(e)=>{setNewPass(e.target.value)}}/>
                <label htmlFor="signup_password">Re-password</label>
                <input name='signup_password' type='password' placeholder='Example: SomeP@$$w0rd123' autoComplete='current-password' className='signup_inputs' onChange={(e)=>{setNewRePass(e.target.value)}}/>
            </div>
            <p className='signup_problem'>{problem}</p>
            <button className='signup_btn' onClick={addUser}>Let's Start</button>
        </form>
    </div>
  )
}
