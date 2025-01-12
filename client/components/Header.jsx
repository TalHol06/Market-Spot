import '../css/header.css';
import '../css/general.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header(){
    const [ isActive, setIsActive ] = useState(false);
    const navigate = useNavigate();

    function activateNav(){
        setIsActive((prev) => !prev);
    }

    function goToSignUp(){
        navigate('/SignUp');
    }

    function goToLogin(){
        navigate('/Login');
    }

    function goToList(){
        navigate('/ListPage')
    }

    function goToDetails(){
        navigate('/DetailPage');
    }

    return (
        <header className="heading">
            <input placeholder="Search Shelf" className="searchbar"/>
            <button onClick={goToList}>Search</button>
            <nav style={{ position: "relative", display: "inline-block" }}>
            <button className="signup-signin-btn" onClick={activateNav}>Sign Up/Sign In</button>
            {isActive && (
                <nav style={{
                    position: "absolute",
                    top: "100%",
                    right: 0,
                    backgroundColor: "#fff",
                    border: "1px solid #ccc",
                    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                    padding: "10px",
                    zIndex: 1000,
                }}>
                <button className="createAcc" onClick={goToSignUp}>Create an Account</button>
                <button className="loginToAcc" onClick={goToLogin}>Login</button>
                </nav>
            )}
            </nav>
            <button onClick={goToDetails}>View Cart</button>
        </header>
    )
}