import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'


const Login = () => {
    const { signInUsinGoogle } = useAuth();
    const location = useLocation()
    const history = useHistory()
    const redirect_uri = location.state?.from || '/home'




    const handleGoogleLogin = () => {
        signInUsinGoogle()
            // .then(result => {

            //     setUser(result.user)
            // })
            // .catch(error => {
            //     setError(error.message)
            // })
            .then(result => {
                history.push(redirect_uri)
            })

    }
    return (
        < >
            <div className="login-area">
                <h2 className="login-title">Please Login</h2>
                <input className="input-login" placeholder="Email" type="text" />
                <br />
                <input className="input-login2" placeholder="********" type="password" name="" id="" />
                <br />
                <input className="input-submit" type="submit" value="Login" />
                <br />
                <button className="google-signin" onClick={handleGoogleLogin}>Google Sign In</button> <br />
            </div>
            {/* <Link to="/register">New User?</Link> */}
        </>
    );
};

export default Login;