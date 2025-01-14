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
                    <SwitchTab path='/Corn'>
                        <p>Corn</p>
                        <br></br>
                        <p>$4.14</p>
                    </SwitchTab>
                    <SwitchTab path='/Onion'>
                        <p>Onion</p>
                        <br></br>
                        <p>$3.62</p>
                    </SwitchTab>
                    <SwitchTab path='/Potatoes'>
                        <p>Potatoes</p>
                        <br></br>
                        <p>$3.62</p>
                    </SwitchTab>
                    <SwitchTab path='/Broccoli'>
                        <p>Broccoli</p>
                        <br></br>
                        <p>$1.30</p>
                    </SwitchTab>
                </div>
                <div>
                    <SwitchTab path='/Carrots'>
                        <p>Carrots</p>
                        <br></br>
                        <p>$2.04</p>
                    </SwitchTab>
                    <SwitchTab path='/Cucumbers'>
                        <p>Cucumbers</p>
                        <br></br>
                        <p>$3.62</p>
                    </SwitchTab>
                    <SwitchTab path='/Tomatoes'>
                        <p>Tomatoes</p>
                        <br></br>
                        <p>$3.41</p>
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