import '../css/general.css';
import styles from '../css/login.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Login(){
    const navigate = useNavigate();
    const url = import.meta.env.VITE_BASE_URL;

    const [regEmail, setRegEmail] = useState('');
    const [regPass, setRegPass] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');

    function goToSignUp(){
        navigate('/SignUp');
    }

    function goBack(){
        navigate('/');
    }

    async function onSubmit(e){
        e.preventDefault();

        const data = {
            email: regEmail,
            password: regPass
        };

        try{
            const response = await fetch(`${url}api/login`, {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data),
            });

            if(response.ok){
                const result = await response.json();
                localStorage.setItem('token', result.token);
                setLoggedIn(true);
                navigate('/');
            } else{
                const errorData = await response.json();
                setError(errorData.error || 'There was an issue logging into your account.');
            }
        } catch (err){
            setError(`Error: ` +err.message);
        }
    }

    return (
        <>
            <header id={styles.loginHeader}>
                <button id={styles.backBtn} onClick={goBack}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Go back
                </button>
                    <h3 id={styles.loginHeaderH3}>Sign In</h3>
                    <p id={styles.loginHeaderP}>Sign in to your existing account</p>
                </header>
            <main id={styles.container}>
            <div id={styles.loginformContainer}>
                <form id={styles.loginForm} onSubmit={onSubmit}>
                    {loggedIn ?
                        <p></p>
                    :
                        <div id={styles.errorMsg}>
                            <p>
                            {error}
                            </p>
                        </div>
                    }           
                <label>Email Address</label>
                <input
                    type="text"
                    value={regEmail}
                    onChange={(e) => setRegEmail(e.target.value)}
                />
                <label>Password</label>
                <input
                    type="password"
                    value={regPass}
                    onChange={(e) => setRegPass(e.target.value)}
                />
                
                    {!regEmail.includes('@') || regPass === '' ?
                    <button type="submit" disabled>
                        Login
                    </button>    
                    :
                    <button type="submit">
                        Login
                    </button>
                    }
                    <div id={styles.navContainer}>
                    <p>
                        New to our store?
                    </p>
                    <button onClick={goToSignUp} id={styles.signupNav}>
                        Create an Account
                    </button>
                    </div>
                </form> 
            </div>
        </main>    
        </>
    )
}