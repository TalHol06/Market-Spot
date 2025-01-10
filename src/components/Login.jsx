import '../css/general.css';
import styles from '../css/login.module.css';
import { useState } from 'react';
import bcrypt from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function Login() {
    const navigate = useNavigate();
    const [regEmail, setRegEmail] = useState('');
    const [regPass, setRegPass] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [message, setMessage] = useState('');
    /* Used for testing */
    const [accounts, setAccounts] = useState([
        {
            FirstName: "Ta'Lee",
            LastName: "Hollins",
            Email: "taleeh98454@gmail.com",
            Password: 'password1234'
        },
        {
            FirstName: "John",
            LastName: "Doe",
            Email: "johnDoe123@gmail.com",
            Password: "Somerandompass"
        }
    ])

    function goToSignUp(){
        navigate('/SignUp');
    }

    async function onSubmit(e) {
        e.preventDefault();
        
        // Used for testing
        for (let i = 0; i < accounts.length; i++){
            if (accounts[i].Email === regEmail && accounts[i].Password === regPass){
                console.log('Successfully logged in!');
                setLoggedIn(true);
                navigate('/');
                return;
            } else{
                
                setMessage('No accounts found that match your Email and Password. Please try again.');
            }
        }

        setRegEmail('');
        setRegPass('');
        setLoggedIn(false);
    }

    function goBack(){
        navigate('/');
    }

    return (
        <>
            <header className={styles.loginHeader}>
            <button className={styles.backBtn} onClick={goBack}>
                <FontAwesomeIcon icon={faArrowLeft} /> Go back
            </button>
                <h3 className={styles.loginHeaderH3}>Sign In</h3>
                <p className={styles.loginHeaderP}>Sign in to your existing account</p>
            </header>
            <main className={styles.container}>
          <div className={styles.loginformContainer}>
            <form className={styles.loginForm} onSubmit={onSubmit}>
                {loggedIn ?
                    <p></p>
                :
                    <div className={styles.errorMsg}>
                        <p>
                        {message}
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
                <div className={styles.navContainer}>
                <p>
                    New to our store?
                </p>
                <button onClick={goToSignUp} className={styles.signupNav}>
                    Create an Account
                </button>
                </div>
            </form> 
          </div>
        </main>
      </>
    );
}