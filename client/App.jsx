import IndexPage from "./pages/IndexPage";
import DetailPage from "./pages/DetailPage";
import ListPage from "./pages/ListPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import BakedPage from "./pages/Sections/BakedPage";
import DairyPage from './pages/Sections/DairyPage';
import FruitPage from './pages/Sections/FruitPage';
import VegetablesPage from './pages/Sections/VegetablesPage';
import MeatPage from './pages/Sections/MeatPage';
import PantryPage from './pages/Sections/PantryPage';
import BeveragesPage from './pages/Sections/BeveragesPage';
import FrozenPage from './pages/Sections/FrozenPage';

import WhiteBread from './pages/Product/WhiteBread';
import WheatBread from './pages/Product/WheatBread';
import PlainBagels from './pages/Product/PlainBagels';
import MiniPlainBagels from './pages/Product/MiniPlainBagels';
import Croissants from './pages/Product/Croissants';
import SourdoughBread from './pages/Product/SourdoughBread';
import BlueberryMuffins from './pages/Product/BlueberryMuffins';
import BananaNutMuffins from './pages/Product/BananaNutMuffins';
import ChocolateChipMuffins from './pages/Product/ChocolateChipMuffins';

import WholeMilk from './pages/Product/WholeMilk';
import OatMilk from './pages/Product/OatMilk';
import TwoMilk from './pages/Product/TwoMilk';
import AlmondMilk from './pages/Product/AlmondMilk';
import HalfHalfMilk from './pages/Product/HalfHalfMilk';
import WhippedCream from './pages/Product/WhippedCream';
import HeavyWhippingCream from './pages/Product/HeavyWhippingCream';
import CreamCheese from './pages/Product/CreamCheese';

import Strawberries from './pages/Product/Strawberries';
import Grapes from './pages/Product/Grapes';
// import Blueberries from './pages/Product/Blueberries';
import Raspberries from './pages/Product/Raspberries';
import Blackberries from './pages/Product/Blackberries';
import Bananas from './pages/Product/Bananas';
import GrannySmithApples from './pages/Product/GrannySmithApples';
import Oranges from './pages/Product/Oranges';

import Corn from './pages/Product/Corn';
import Onion from './pages/Product/Onion';
import Potatoes from './pages/Product/Potatoes';
import Broccoli from './pages/Product/Broccoli';
import Carrots from './pages/Product/Carrots';
import Cucumbers from './pages/Product/Cucumbers';
import Tomatoes from './pages/Product/Tomatoes';

import GroundBeef from './pages/Product/GroundBeef';
import GroundTurkey from './pages/Product/GroundTurkey';
import ChickenBreast from './pages/Product/ChickenBreast';
import WholeChicken from './pages/Product/WholeChicken';
import ChuckRoast from './pages/Product/ChuckRoast';
import PorkChops from './pages/Product/PorkChops';

import AppleJuice from './pages/Product/AppleJuice';
import GrapeJuice from './pages/Product/GrapeJuice';
import CranberryJuice from './pages/Product/CranberryJuice';
import DrPepperZeroSugarSoda from './pages/Product/DrPepperZeroSugarSoda';
import CocaCola from './pages/Product/CocaCola';
import CoconutWater from './pages/Product/CoconutWater';
import NaturalSpringWater from './pages/Product/NaturalSpringWater';

import FarfallePasta from './pages/Product/FarfallePasta';
import BasmatiRice from './pages/Product/BasmatiRice';
import JasmineRice from './pages/Product/JasmineRice';
import Sugar from './pages/Product/Sugar';
import Flour from './pages/Product/Flour';
import Salt from './pages/Product/Salt';
import Pepper from './pages/Product/Pepper';
import VegtableOil from './pages/Product/VegetableOil';

import VanillaIceCream from './pages/Product/VanillaIceCream';
import ChocolateIceCream from './pages/Product/ChocolateIceCream';
// import ChickenNuggets from './pages/Product/ChickenNuggests';
import Waffles from './pages/Product/Waffles';
import TaterTots from './pages/Product/TaterTotes';
import PepperoniPizza from './pages/Product/PepperoniPizza';
import FrenchFries from './pages/Product/FrenchFries';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/DetailPage' element={<DetailPage />} />
        <Route path='/ListPage' element={<ListPage />} />
        <Route path='/BakedPage' element={<BakedPage />} />
        <Route path='/DairyPage' element={<DairyPage />} />
        <Route path='/FruitPage' element={<FruitPage />} />
        <Route path='/VegetablesPage' element={<VegetablesPage />} />
        <Route path='/MeatPage' element={<MeatPage />} />
        <Route path='/PantryPage' element={<PantryPage />} />
        <Route path='/BeveragesPage' element={<BeveragesPage />} />
        <Route path='/FrozenPage' element={<FrozenPage />} />
        
        <Route path='/WhiteBread' element={<WhiteBread />} />
        <Route path='/WheatBread' element={<WheatBread />} />
        <Route path='PlainBagels' element={<PlainBagels />} />
        <Route path='/MiniPlainBagels' element={<MiniPlainBagels />} />
        <Route path='/Croissants' element={<Croissants />} />
        <Route path='/SourdoughBread' element={<SourdoughBread />} />
        <Route path='/BlueberryMuffins' element={<BlueberryMuffins />} />
        <Route path='/BananaNutMuffins' element={<BananaNutMuffins />} />
        <Route path='/ChocolateChipMuffins' element={<ChocolateChipMuffins />} />
        
        <Route path='/WholeMilk' element={<WholeMilk />} />
        <Route path='/OatMilk' element={<OatMilk />} />
        <Route path='/TwoMilk' element={<TwoMilk />} />
        <Route path='/AlmondMilk' element={<AlmondMilk />} />
        <Route path='/HalfHalfMilk' element={<HalfHalfMilk />} />
        <Route path='/WhippedCream' element={<WhippedCream />} />
        <Route path='/HeavyWhippingCream' element={<HeavyWhippingCream />} />
        <Route path='/CreamCheese' element={<CreamCheese />} />

        <Route path='/Strawberries' element={<Strawberries />} />
        <Route path='/Grapes' element={<Grapes />} />
        {/* <Route path='/Blueberries' element={<BlueBerries />} /> */}
        <Route path='/Raspberries' element={<Raspberries />} />
        <Route path='/Blackberries' element={<Blackberries />} />
        <Route path='/Bananas' element={<Bananas />} />
        <Route path='/GrannySmithApples' element={<GrannySmithApples />} />
        <Route path='/Oranges' element={<Oranges />} />

        <Route path='/Corn' element={<Corn />} />
        <Route path='/Onion' element={<Onion />} />
        <Route path='/Potatoes' element={<Potatoes />} />
        <Route path='/Broccoli' element={<Broccoli />} />
        <Route path='/Carrots' element={<Carrots />} />
        <Route path='/Cucumbers' element={<Cucumbers />} />
        <Route path='/Tomatoes' element={<Tomatoes />} />

        <Route path='/GroundBeef' element={<GroundBeef />} />
        <Route path='/GroundTurkey' element={<GroundTurkey />} />
        <Route path='/ChickenBreast' element={<ChickenBreast />} />
        <Route path='/WholeChicken' element={<WholeChicken />} />
        <Route path='/ChuckRoast' element={<ChuckRoast />} />
        <Route path='/PorkChops' element={<PorkChops />} />

        <Route path='/AppleJuice' element={<AppleJuice />} />
        <Route path='/GrapeJuice' element={<GrapeJuice />} />
        <Route path='/CranberryJuice' element={<CranberryJuice />} />
        <Route path='/DrPepperZeroSugarSoda' element={<DrPepperZeroSugarSoda />} />
        <Route path='/CocaCola' element={<CocaCola />} />
        <Route path='/CoconutWater' element={<CoconutWater />} />
        <Route path='/NaturalSpringWater' element={<NaturalSpringWater />} />

        <Route path='/FarfallePasta' element={<FarfallePasta />} />
        <Route path='/BasmatiRice' element={<BasmatiRice />} />
        <Route path='/JasmineRice' element={<JasmineRice />} />
        <Route path='/Sugar' element={<Sugar />} />
        <Route path='/Flour' element={<Flour />} />
        <Route path='/Salt' element={<Salt />} />
        <Route path='/Pepper' element={<Pepper />} />
        <Route path='/VegtableOil' element={<VegtableOil />} />

        <Route path='/VanillaIceCream' element={<VanillaIceCream />} />
        <Route path='/ChocolateIceCream' element={<ChocolateIceCream />} />
        {/* <Route path='/ChickenNuggets' element={<ChickenNuggets />} /> */}
        <Route path='/Waffles' element={<Waffles />} />
        <Route path='/TaterTots' element={<TaterTots />} />
        <Route path='/PepperoniPizza' element={<PepperoniPizza />} />
        <Route path='/FrenchFries' element={<FrenchFries />} />

      </Routes>
    </Router>
  )
}

export default App