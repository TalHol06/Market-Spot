import '../css/general.css';
import styles from '../css/signup.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function SignUp(){
    const navigate = useNavigate();

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [error, setError] = useState('');
    const [agree, setAgree] = useState(false);

    function agreeCheckBox(){
        setAgree((prev) => !prev);
    }

    function goBack(){
        navigate('/');
    }

    function isValidEmail(email){
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return validEmail.test(email);
    }

    function isValidPassword(pass){
        if (pass.legnth >= 8 || /\d/.test(pass) || /[a-zA-Z]/.test(pass)){
            return true;
        }
    }

    async function handleSubmission(e){
        e.preventDefault();

        const data = {
            first_name: fName,
            last_name: lName,
            email: email,
            password: pass,
        };

        try{
            const response = await fetch('http://localhost:5000/api/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok){
                navigate('/Login');
            } else{
                const errorData = await response.json();
                setError(errorData.error || 'There was an issue creating your account');
            }
        } catch (err){
            setError('Error: ' +err.message);
        }
    }

    return (
        <>
            <header id={styles.signupHeader}>
                <button id={styles.backBtn} onClick={goBack}>
                    <FontAwesomeIcon icon={faArrowLeft} /> Go Back
                </button>
                <h3 id={styles.headerH3}>Create Your Account</h3>
                <p id={styles.headerP}>
                    You can start shopping with us once your account is finished!
                </p>
            </header>
            <main id={styles.container}>
                <div id={styles.formContainer}>
                    <form id={styles.signupForm} onSubmit={handleSubmission}>
                        <p id={styles.notice}>
                            * Indicates required field
                        </p>
                        <label>First Name *</label>
                        <input
                          type="text"
                          name="first_name"
                          value={fName}
                          onChange={ (e) => setFName(e.target.value) }
                        />
                        <label>Last Name *</label>
                        <input
                          type="text"
                          name="last_name"
                          value={lName}
                          onChange={ (e) => setLName(e.target.value) }
                        />
                        <label>Email Address</label>
                        <input
                          type="email"
                          name="email"
                          value={email}
                          onChange={ (e) => setEmail(e.target.value) }
                        />
                        <label>Password</label>
                        <input
                          type="password"
                          name="password"
                          value={pass}
                          onChange={ (e) => setPass(e.target.value) }
                        />

                        <div id={styles.checkboxContainer}>
                            <input type="checkbox" id={styles.formCheckbox} onChange={agreeCheckBox} />
                            <p id={styles.checkboxP}>
                                I agree to this Market Spot's Terms & Conditions.
                            </p>
                        </div>

                        {error && <p id={styles.error}> {error}</p> }

                        <button
                          type="submit"
                          disabled={
                            !agree ||
                            fName.length < 2 ||
                            lName.length < 2 ||
                            !isValidEmail(email) ||
                            isValidPassword
                          }
                        >
                            Create Account
                        </button>
                    </form>
                </div>
            </main>
        </> 
    )
}