import '../css/general.css';
import Header from '../components/Header';
// import { useNavigate } from 'react-router-dom';
import styles from '../css/detailpage.module.css';
import { useState } from 'react';

export default function DetailPage(){
    // const navigate = useNavigate();
    const [token] = useState(localStorage.getItem('token'));

    return (
        <>
            <Header />
            <main id={styles.mainContainer}>
                <div id={styles.container}>
                    <aside id={styles.productImg}>
                        <img src="../assets/MarketSpotLogo.png" />
                    </aside>
                    <section id={styles.info}>
                        <h2>Placeholder</h2>
                        <p>$1.99/lb UPC: 0000000003283</p>
                        <p>about</p>
                        <div id={styles.price}>
                            <p>
                                $1.00
                            </p>
                        </div>
                        <div id={styles.buttons}>
                            {!token ?
                                <button id={styles.signIn}>Sign In to Add to Cart</button>
                            : 
                                <button id={styles.add}>Add to Cart</button>
                            }
                        </div>
                    </section>
                </div>
                <h1>Product Information</h1>
                <section id={styles.priceProductDetails}>
                    <div id={styles.detailBox}>
                        <h2 id={styles.nutrition}>Nutrition Information</h2>
                        <div id={styles.nutritionFacts}>
                            <h1>Nutrition Facts</h1>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}