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
                    <SwitchTab path='/GroundBeef'>
                        <p>Ground Beef</p>
                        <br></br>
                        <p>$4.46</p>
                    </SwitchTab>
                    <SwitchTab path='/GroundTurkey'>
                        <p>Ground Turkey</p>
                        <br></br>
                        <p>$7.27</p>
                    </SwitchTab>
                    <SwitchTab path='/ChickenBreast'>
                        <p>Chicken Breast</p>
                        <br></br>
                        <p>$13.59</p>
                    </SwitchTab>
                    <SwitchTab path='/WholeChicken'>
                        <p>Whole Chicken</p>
                        <br></br>
                        <p>$10.63</p>
                    </SwitchTab>
                </div>
                <div>
                    <SwitchTab path='/ChuckRoast'>
                        <p>Chuck Roast</p>
                        <br></br>
                        <p>$17.70</p>
                    </SwitchTab>
                    <SwitchTab path='/PorkChops'>
                        <p>Pork Chops</p>
                        <br></br>
                        <p>$7.13</p>
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