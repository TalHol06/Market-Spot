import '../css/indexpage.css';
import React from 'react';
import Header from '../components/Header';
import SwitchTab from '../components/TabSelect';

export default function IndexPage(){
    return (
        <>
        <Header />
        <main className="container">
            <aside className="items">
                    <div className="item-buttons">
                        <SwitchTab path='/BakedPage'>Baked</SwitchTab>
                        <SwitchTab path='/DairyPage'>Dairy</SwitchTab>
                        <SwitchTab path='/FruitPage'>Fruit</SwitchTab>
                        <SwitchTab path='/VegtablesPage'>Vegtables</SwitchTab>
                        <SwitchTab path='/MeatPage'>Meat</SwitchTab>
                        <SwitchTab path='/PantryPage'>Pantry</SwitchTab>
                        <SwitchTab path='/BeveragesPage'>Beverages</SwitchTab>
                        <SwitchTab path='/FrozenPage'>Frozen</SwitchTab>
                    </div>
            </aside>
            <section className="section">
                <div>
                    Deal
                </div>
                <div>
                    Deal
                </div>
                <div>
                    Deal
                </div>
                <div>
                    Deal
                </div>
            </section>
            <section className="checkout">
                Recommended
            </section>
        </main>        
        </>
    )
}