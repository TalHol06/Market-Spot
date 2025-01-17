import '../css/general.css';
import styles from '../css/header.module.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

export default function Header(){
    const navigate = useNavigate();

    const [isActive, setIsActive] = useState(false);
    const [searchValue, setValue] = useState('');
    const [token] = useState(localStorage.getItem('token'));

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

    function signOut(){
        localStorage.removeItem('token');
        navigate('/Login');
    }

    function goToDetails(){
        if (token){
            try{
                const decodedToken = jwtDecode(token);
                if (decodedToken && decodedToken.role === 'user'){
                    navigate('/DetailPage');
                } else{
                    navigate('/Logion');
                }
            } catch (err){
                console.error('Invalid token: ' +err.message);
            }
        } else{
            navigate('/Login')
        }
    }

    return (
        <header className={styles.heading}>
            <div className={styles.logoContainer}>
                <img src="../assets/MarketSpotLogo.png" className={styles.logo}/>
            </div>
            <form className={styles.searchForm}>
                <div className={styles.searchContainer}>
                    <input 
                    placeholder="Search Shelf" 
                    className={styles.searchInput}
                    type="text"
                    value={searchValue}
                    onChange={(e) => setValue(e.target.value)}
                    />
                    <button onClick={goToList} className={styles.searchButton}>🔍</button>
                </div>
            </form>
            <nav className={styles.navButtons}>
            <button onClick={activateNav} className={styles.signUpInBtn}>
                Sign Up/Sign In
            </button>
            {isActive && (token != null)?(
                <nav className={styles.dropdownActive}>
                    <button className={styles.createAccBtn} onClick={goToSignUp}>Create an Account</button>
                    <button onClick={signOut}>SignOut</button>
                </nav>
            ): isActive?(
                <nav className={styles.dropdownActive}>
                    <button className={styles.createAccBtn} onClick={goToSignUp}>Create an Account</button>
                    <button onClick={goToLogin}>Login</button>
                </nav>
            ) : (
                <nav className={styles.dropdown}>
                    <button className={styles.createAccBtn} onClick={goToSignUp}>Create an Account</button>
                    <button onClick={goToLogin}>Login</button>
                </nav>
                )
            }
                <button onClick={goToDetails} className={styles.cart}>
                    View Cart
                </button>
            </nav>

        </header>
    )
}