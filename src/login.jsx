import React, {useState} from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] =useState('');

    const handelSubmit =(e) => {
        e.preventDeafult();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handelSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e)=>setPass(e.target.value)} type="password" placeholder="*******" id="password" name="password" />
                <button type="submit">Log In</button>
                <br/>
            </form>

            <button className="link-btn" onClick={() =>props.onFormSwitch('register')}>Don't have an account? Register here.</button>   
        </div>
    )
}