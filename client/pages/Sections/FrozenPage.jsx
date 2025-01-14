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
                    <SwitchTab path='/VanillaIceCream'>
                        <p>VanillaIceCream</p>
                        <br></br>
                        <p>$7.26</p>
                    </SwitchTab>
                    <SwitchTab path='/ChocolateIceCream'>
                        <p>Chocolate Ice Cream</p>
                        <br></br>
                        <p>$7.26</p>
                    </SwitchTab>
                    <SwitchTab path='/ChickenNuggets'>
                        <p>Chicken Nuggets</p>
                        <br></br>
                        <p>$12.19</p>
                    </SwitchTab>
                    <SwitchTab path='/Waffles'>
                        <p>Waffles</p>
                        <br></br>
                        <p>$6.21</p>
                    </SwitchTab>
                </div>
                <div>
                    <SwitchTab path='/TaterTots'>
                        <p>Tater Tots</p>
                        <br></br>
                        <p>$5.49</p>
                    </SwitchTab>
                    <SwitchTab path='/PepperoniPizza'>
                        <p>Pepperoni Pizza</p>
                        <br></br>
                        <p>$8.81</p>
                    </SwitchTab>
                    <SwitchTab path='/FrenchFries'>
                        <p>FrenchFries</p>
                        <br></br>
                        <p>$4.65</p>
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