import React from "react"

export default function Form() {
    return (
        <section className="login-page">
            <div className="main">
                <form className="signup">
                    <label htmlFor="chk" aria-hidden="true">Авторизация</label>
                    <input type="text" name="txt" placeholder="Username" required={true} />
                    <input type="password" name="pswd" placeholder="Password" required={true} />
                    <input type="Authentication" name="Authentication" placeholder="Authentication" required={false} />
                    <button >Вход</button>
                </form>
            </div>
        </section>      
    )   
}