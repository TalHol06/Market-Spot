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
                    <SwitchTab path='/WhiteBread'>
                        <p>White Bread</p>
                        <br></br>
                        <p>$2.28</p>
                    </SwitchTab>
                    <SwitchTab path='/WheatBread'>
                        <p>Wheat Bread</p>
                        <br></br>
                        <p>$3.79</p>
                    </SwitchTab>
                    <SwitchTab path='/PlainBagels'>
                        <p>Plain Bagels</p>
                        <br></br>
                        <p>$2.70</p>
                    </SwitchTab>
                    <SwitchTab path='/MiniPlainBagels'>
                        <p>Mini Plain Bagels</p>
                        <br></br>
                        <p>$4.97</p>
                    </SwitchTab>
                </div>
                <div>
                    <SwitchTab path='/Croissants'>
                        <p>Croissants</p>
                        <br></br>
                        <p>$6.22</p>
                    </SwitchTab>
                    <SwitchTab path='/SourdoughBread'>
                        <p>Sourdough Bread</p>
                        <br></br>
                        <p>$4.15</p>
                    </SwitchTab>
                    <SwitchTab path='/BlueberryMuffins'>
                        <p>Blueberry Muffins</p>
                        <br></br>
                        <p>$4.66</p>
                    </SwitchTab>
                    <SwitchTab path='/BananaNutMuffins'>
                        <p>Banana Nut Muffins</p>
                        <br></br>
                        <p>$4.66</p>
                    </SwitchTab>
                </div>
                <div>
                    <SwitchTab path='/ChocolateChipMuffins'>
                        <p>Chocolate Chip Muffins</p>
                        <br></br>
                        <p>$4.66</p>
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