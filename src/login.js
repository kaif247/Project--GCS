import React, { useState } from 'react';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email, 'Password:', password, 'Remember Me:', rememberMe);
        // Add your login logic here
    };

    return (
        <div className="login-container">
            <div className="login-content">
                <div className="login-left">
                    <div className="facebook-logo">facebook</div>
                    <h2 className="facebook-tagline">Facebook helps you connect and share with the people in your life.</h2>
                </div>

                <div className="login-right">
                    <form onSubmit={handleSubmit} className="login-form">
                        <input
                            type="email"
                            placeholder="Email address or phone number"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="input-field"
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="input-field"
                            required
                        />
                        <button type="submit" className="login-button">Log In</button>
                    </form>

                    <a href="#forgot" className="forgot-password">Forgotten password?</a>

                    <div className="divider"></div>

                    <button className="signup-button">Create new Facebook account</button>

                    <p className="disclaimer">
                        <strong>Create a Page</strong> for a celebrity, brand or business.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;
    