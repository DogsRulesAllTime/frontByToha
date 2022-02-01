// import React from "react"
import React, { useEffect, useState } from 'react';
export default function Form() {
    const [login, setLogin] = useState<string>("");
    const [psw, setPsw] = useState<string>("");
    const handleSubmit = async () => {
        const response = await fetch("http://localhost/4000", {
            method: "POST",
            body: JSON.stringify({
              login: login,
              pass: psw,
            })
        }; };
    return (
        <section className="login-page">
            <div className="main">
                <form className="signup" >
                    <label htmlFor="chk" aria-hidden="true">Авторизация!</label>
                    <input type="text"
                      value={login}
                      name="txt" 
                      onChange={(e) => setLogin(e.target.value)}
                      placeholder="Username" 
                      required={true} />
                    <input type="password"
                    value={psw}
                    name="pswd"
                    onChange={(e) => setPsw(e.target.value)}
                    placeholder="Password" required={true} />
                    <input type="Authentication" name="Authentication" placeholder="Authentication" required={false} />
                    <button onClick={handleSubmit} type="submit">Вход</button>
                </form>
            </div>
        </section>      
    )   
}