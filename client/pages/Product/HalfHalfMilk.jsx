import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import '../../css/general.css';
import styles from '../../css/detailpage.module.css';
import {useState} from 'react';
export default function DetailPage(){
    const navigate = useNavigate();
    const [token] = useState(localStorage.getItem('token'));
    return (
        <>
            <Header />
            <main id={styles.mainContainer}>
                <div id={styles.container}>
                    <aside id={styles.productImg}>
                        <img src="/client/assets/MarketSpotLogo.png" />
                    </aside>
                    <section id={styles.info}>
                        <h2>Half & Half Milk</h2>
                        <p></p>
                        <p>about</p>
                        <div id={styles.price}>
                            <p>
                                $4.14
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