import '../css/general.css';
import styles from '../css/signup.module.css';
import { useState } from 'react';
import bcrypt from 'bcryptjs';
import {useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

export default function SignUp() {
    const navigate = useNavigate();
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [agree, setAgree] = useState(false);
  
    function agreeCheckbox(){
      setAgree((prev) => !prev);
    }

    async function handlePassword(plainPassword){
        try{
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
            return hashedPassword;
        }  catch (err){
            console.log(`Error hashing password: ` +err.message);
        }
    }

    function isValidEmail(email){
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return validEmail.test(email);
    }

    async function onSubmit(e) {
      e.preventDefault();

      const hashedPassword = await handlePassword(pass);
  
      setFName('');
      setLName('');
      setEmail('');
      setPass('');
    }

    function goBack(){
        navigate('/');
    }
  
    return (
      <>
      <header className={styles.signupHeader}>
          <button className={styles.backBtn} onClick={goBack}>
              <FontAwesomeIcon icon={faArrowLeft} /> Go back
          </button>
          <h3 className={styles.headerH3}>Create Your Account</h3>
          <p className={styles.headerP}>
              You can start shopping with us once your account is finished!
          </p>
      </header>
      <main className={styles.container}>
          <div className={styles.formContainer}>
              <form className={styles.signupForm} onSubmit={onSubmit}>
                  <p className={styles.notice}>
                      * Indicates required field
                  </p>

                  <label>First Name *</label>
                  <input
                      type="text"
                      value={fName}
                      onChange={(e) => setFName(e.target.value)}
                  />
                  <label>Last Name *</label>
                  <input
                      type="text"
                      value={lName}
                      onChange={(e) => setLName(e.target.value)}
                  />
                  <label>Email Address *</label>
                  <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                  />
                  <label>Password *</label>
                  <p>Must be at least 8 characters.</p>
                  <p>Must have at least one letter and one number</p>
                  <input
                      type="password"
                      value={pass}
                      onChange={(e) => setPass(e.target.value)}
                  />

                  <div className={styles.checkboxContainer}>
                      <input type="checkbox" id={styles.formcheckbox} onChange={agreeCheckbox} />
                      <p className={styles.checkboxP}>
                          I agree to this store's Terms & Conditions and confirm that I want to join the rewards program.
                      </p>
                  </div>
                  {!agree || fName === '' || lName === '' || !isValidEmail(email) || (pass.length < 8 || !/\d/.test(pass) || !/[a-zA-Z]/.test(pass)) ?
                      <button type="submit" disabled>Create Account</button>
                      :
                      <button type="submit">
                          Create Account
                      </button>
                  }
              </form>
          </div>
      </main>
  </>
    );
  }