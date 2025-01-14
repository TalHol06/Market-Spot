import Header from "../../components/Header";
import { useNavigate } from "react-router-dom";
import SwitchTab from '../../components/TabSelect';
export default function ListPage(){
    const navigate = useNavigate();
    function goBack(){
        navigate('/');
    }
    return (
        <>
            <Header />
            <main className="container" id="">
            <div>
                <div>
                    <SwitchTab path='/WholeMilk'>
                        <p>Whole Milk</p>
                        <br></br>
                        <p>$3.45</p>
                    </SwitchTab>
                    <SwitchTab path='/OatMilk'>
                        <p>Oat Milk</p>
                        <br></br>
                        <p>$5.18</p>
                    </SwitchTab>
                    <SwitchTab path='/TwoMilk'>
                        <p>2% Milk</p>
                        <br></br>
                        <p>$3.89</p>
                    </SwitchTab>
                    <SwitchTab path='/AlmondMilk'>
                        <p>Almond Milk</p>
                        <br></br>
                        <p>$5.18</p>
                    </SwitchTab>
                </div>
                <div>
                    <SwitchTab path='/HalfHalfMilk'>
                        <p>Half & Half Milk</p>
                        <br></br>
                        <p>$4.14</p>
                    </SwitchTab>
                    <SwitchTab path='/WhippedCream'>
                        <p>Whipped Cream</p>
                        <br></br>
                        <p>$3.11</p>
                    </SwitchTab>
                    <SwitchTab path='/HeavyWhippingCream'>
                        <p>Heavy Whipping Cream</p>
                        <br></br>
                        <p>$5.61</p>
                    </SwitchTab>
                    <SwitchTab path='/CreamCheese'>
                        <p>Cream Cheese</p>
                        <br></br>
                        <p>$2.39</p>
                    </SwitchTab>
                </div>
            </div>
                <button className="back-btn" onClick={goBack}>
            Go Back
        </button>
            </main>
        </>
    )
}