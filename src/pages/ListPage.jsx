import Header from "../components/Header";
import '../css/listpage.css';
import { useNavigate } from "react-router-dom";

export default function ListPage(){
    const navigate = useNavigate();

    function goBack(){
        navigate('/');
    }

    return (
        <>
            <Header />
            <main className="container">
                <div className="item-row">
                    <div className="item">
                        d
                    </div>
                    <div className="item">
                        d
                    </div>
                    <div className="item">
                        d
                    </div>
                    <div className="item">
                        d
                    </div>
                    <div className="item">
                        d
                    </div>
                    <div className="item">
                        d
                    </div>
                </div>
                <div className="item-row">
                    <div className="item">
                        d
                    </div>
                    <div className="item">
                        d
                    </div>
                    <div className="item">
                        d
                    </div>
                    <div className="item">
                        d
                    </div>
                    <div className="item">
                        d
                    </div>
                    <div className="item">
                        d
                    </div>
                </div>
                <div className="item-row">
                    <div className="item">
                        d
                    </div>
                    <div className="item">
                        d
                    </div>
                    <div className="item">
                        d
                    </div>
                    <div className="item">
                        d
                    </div>
                    <div className="item">
                        d
                    </div>
                    <div className="item">
                        d
                    </div>
                </div>
                <button className="back-btn" onClick={goBack}>
            Go Back
        </button>
            </main>
        </>
    )
}