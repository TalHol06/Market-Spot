import '../css/general.css';
import '../css/login.css';
import { useState } from 'react';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';

export default function Login({ accounts = [] }) {
    const navigate = useNavigate();
    const [regEmail, setRegEmail] = useState('');
    const [regPass, setRegPass] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    async function handleSubmission(e) {
        e.preventDefault();

        for (let i = 0; i < accounts.length; i++) {
            const isMatch = await bcrypt.compare(regPass, accounts[i].Password);

            if (accounts[i].Email === regEmail && isMatch) {
                setLoggedIn(true);
                break;
            }
        }

        setRegEmail('');
        setRegPass('');
    }

    function goBack(){
        navigate('/');
    }

    return (
        <>
            <header className="login-header">
                <h3>Sign In</h3>
                <p>Sign in to your existing account</p>
            </header>
            <main className="container">
                <div className="form-container">
                    <form onSubmit={handleSubmission}>
                        <label>Email Address</label>
                        <input
                            type="text"
                            value={regEmail}
                            onChange={(e) => setRegEmail(e.target.value)}
                        />
                        <label>Password</label>
                        <input
                            type="text"
                            value={regPass}
                            onChange={(e) => setRegPass(e.target.value)}
                        />
                        <button type="submit">Sign In</button>
                    </form>
                </div>
                <button className="back-btn" onClick={goBack}>
                     Go Back
                    </button>
            </main>
        </>
    );
}