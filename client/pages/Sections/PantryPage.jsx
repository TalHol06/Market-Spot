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
                    <SwitchTab path='/FarfallePasta'>
                        <p>Farfalle Pasta</p>
                        <br></br>
                        <p>$1.91</p>
                    </SwitchTab>
                    <SwitchTab path='/BasmatiRice'>
                        <p>Basmati Rice</p>
                        <br></br>
                        <p>$5.08</p>
                    </SwitchTab>
                    <SwitchTab path='/JasmineRice'>
                        <p>Jasmine Rice</p>
                        <br></br>
                        <p>$7.16</p>
                    </SwitchTab>
                    <SwitchTab path='/Sugar'>
                        <p>Sugar</p>
                        <br></br>
                        <p>$2.58</p>
                    </SwitchTab>
                </div>
                <div>
                    <SwitchTab path='/Flour'>
                        <p>Flour</p>
                        <br></br>
                        <p>$6.22</p>
                    </SwitchTab>
                    <SwitchTab path='/Salt'>
                        <p>Salt</p>
                        <br></br>
                        <p>$1.64</p>
                    </SwitchTab>
                    <SwitchTab path='/Pepper'>
                        <p>Pepper</p>
                        <br></br>
                        <p>$4.14</p>
                    </SwitchTab>
                    <SwitchTab path='/VegtableOil'>
                        <p>Vegtable Oil</p>
                        <br></br>
                        <p>$4.13</p>
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