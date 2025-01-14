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
                    <SwitchTab path='/AppleJuice'>
                        <p>Apple Juice</p>
                        <br></br>
                        <p>$3.10</p>
                    </SwitchTab>
                    <SwitchTab path='/GrapeJuice'>
                        <p>Grape Juice</p>
                        <br></br>
                        <p>$3.89</p>
                    </SwitchTab>
                    <SwitchTab path='/CranberryJuice'>
                        <p>Cranberry Juice</p>
                        <br></br>
                        <p>$3.56</p>
                    </SwitchTab>
                    <SwitchTab path='/DrPepperZeroSugarSoda'>
                        <p>Dr.Pepper Zero Sugar Soda</p>
                        <br></br>
                        <p>$7.57</p>
                    </SwitchTab>
                </div>
                <div>
                    <SwitchTab path='/CocaCola'>
                        <p>Coca-Cola</p>
                        <br></br>
                        <p>$7.24</p>
                    </SwitchTab>
                    <SwitchTab path='/CoconutWater'>
                        <p>Coconut Water</p>
                        <br></br>
                        <p>$4.16</p>
                    </SwitchTab>
                    <SwitchTab path='/NaturalSpringWater'>
                        <p>Natural Spring Water</p>
                        <br></br>
                        <p>$4.56</p>
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