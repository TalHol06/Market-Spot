import '../css/detailpage.css';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

export default function DetailPage(){
    const navigate = useNavigate();

    function goBack(){
        navigate('/');
    }

    return (
        <>
            <Header />
            <main className="container">
                <aside className="productimg">
                    product img
                </aside>
                <section className="info">
                    info
                </section>
                <section className="price-product-details">
                    product details
                </section>
                <button className="back-btn" onClick={goBack}>
            Go Back
        </button>
            </main>

        </>
    )
}