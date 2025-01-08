import '../css/general.css';
import '../css/signup.css';
import { useState } from 'react';
import bcrypt from 'bcryptjs';
import Login from './Login';
import { Navigate, useNavigate } from 'react-router-dom';

export default function SignUp() {
    const navigate = useNavigate();
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [accounts, setAccounts] = useState([]);
  
    async function handlePassword(plainPassword){
        try{
            const saltRounds = 10;
            const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
            return hashedPassword;
        }  catch (err){
            console.log(`Error hashing password: ` +err.message);
        }
    }

    async function onSubmit(e) {
      e.preventDefault();
      const hashedPassword = await handlePassword(pass);
        
      const newAccount = {
        FirstName: fName,
        LastName: lName,
        Email: email,
        Password: hashedPassword,
      };
  
      setAccounts([...accounts, newAccount]);
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
        <header className="signup-header">
          <h3>Create Your Account</h3>
          <p>You can start shopping with us once your account is finished!</p>
        </header>
        <main className="container">
            
          <div className="form-container">
            <form onSubmit={onSubmit}>
              <label>First Name</label>
              <input
                type="text"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
              <label>Last Name</label>
              <input
                type="text"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
              <label>Email Address</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <p>Must be at least 8 characters.</p>
              <p>Must have at least one letter and one number</p>
              <input
                type="text"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
              />
              <button type="submit">Create Account</button>
            </form>
            {/* <Login accounts={accounts} /> */}
          </div>
          {/* <Login accounts={accounts} /> */}
        <button className="back-btn" onClick={goBack}>
            Go Back
        </button>
        </main>
      </>
    );
  }