import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';


import App from './App.jsx';

import IndexPage from './pages/IndexPage.jsx';
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
import Waffles from './pages/Product/Waffles';
import TaterTots from './pages/Product/TaterTotes';
import PepperoniPizza from './pages/Product/PepperoniPizza';
import FrenchFries from './pages/Product/FrenchFries';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <IndexPage />
      },
      {
        path: '/DetailPage',
        element: <DetailPage />
      },
      {
        path: '/ListPage',
        element: <ListPage />
      },
      {
        path: '/Login',
        element: <Login />
      },
      {
        path: '/SignUp',
        element: <SignUp />
      },
      {
        path: '/BakedPage',
        element: <BakedPage />
      },
      {
        path: '/DairyPage',
        element: <DairyPage />
      },
      {
        path: '/FruitPage',
        element: <FruitPage />
      },
      {
        path: '/MeatPage',
        element: <MeatPage />
      },
      {
        path: '/VegetablePage',
        element: <VegetablesPage />
      },
      {
        path: '/PantryPage',
        element: <PantryPage />
      },
      {
        path: '/BeveragesPage',
        element: <BeveragesPage />
      },
      {
        path: '/FrozenPage',
        element: <FrozenPage />
      },
      {
        path: '/WhiteBread',
        element: <WhiteBread />
      },
      {
        path: '/WheatBread',
        element: <WheatBread />
      },
      {
        path: '/PlainBagels',
        element: <PlainBagels />
      },
      {
        path: '/MiniPlainBagels',
        element: <MiniPlainBagels />
      },
      {
        path: '/SourdoughBread',
        element: <SourdoughBread />
      },
      {
        path: '/BlueberryMuffins',
        element: <BlueberryMuffins />
      },
      {
        path: '/BananaNutMuffins',
        element: <BananaNutMuffins />
      },
      {
        path: '/ChocolateChipMuffins',
        element: <ChocolateChipMuffins />
      },
      {
        path: '/Croissants',
        element: <Croissants />
      },
      {
        path: '/WholeMilk',
        element: <WholeMilk />
      },
      {
        path: '/OatMilk',
        element: <OatMilk />
      },
      {
        path: '/TwoMilk',
        element: <TwoMilk />
      },
      {
        path: '/AlmondMilk',
        element: <AlmondMilk />
      },
      {
        path: '/HalfHalfMilk',
        element: <HalfHalfMilk />
      },
      {
        path: '/WhippedCream',
        element: <WhippedCream />
      },
      {
        path: '/HeavyWhippingCream',
        element: <HeavyWhippingCream />
      },
      {
        path: '/CreamCheese',
        element: <CreamCheese />
      },
      {
        path: '/Strawberries',
        element: <Strawberries />
      },
      {
        path: '/Grapes',
        element: <Grapes />
      },
      {
        path: '/Raspberries',
        element: <Raspberries />
      },
      {
        path: '/Blackberries',
        element: <Blackberries />
      },
      {
        path: '/Bananas',
        element: <Bananas />
      },
      {
        path: '/GrannySmithApples',
        element: <GrannySmithApples />
      },
      {
        path: '/Oranges',
        element: <Oranges />
      },
      {
        path: '/Corn',
        element: <Corn />
      },
      {
        path: '/Onion',
        element: <Onion />
      },
      {
        path: '/Potatoes',
        element: <Potatoes />
      },
      {
        path: '/Broccoli',
        element: <Broccoli />
      },
      {
        path: '/Carrots',
        element: <Carrots />
      },
      {
        path: '/Cucumbers',
        element: <Cucumbers />
      },
      {
        path: '/Tomatoes',
        element: <Tomatoes />
      },
      {
        path: '/GroundBeef',
        element: <GroundBeef />
      },
      {
        path: '/GroundTurkey',
        element: <GroundTurkey />
      },
      {
        path: '/ChickenBreast',
        element: <ChickenBreast />
      },
      {
        path: '/WholeChicken',
        element: <WholeChicken />
      },
      {
        path: '/ChuckRoast',
        element: <ChuckRoast />
      },
      {
        path: '/PorkChops',
        element: <PorkChops />
      },
      {
        path: '/AppleJuice',
        element: <AppleJuice />
      },
      {
        path: '/GrapeJuice',
        element: <GrapeJuice />
      },
      {
        path: '/CranberryJuice',
        element: <CranberryJuice />
      },
      {
        path: '/DrPepperZeroSugarSoda',
        element: <DrPepperZeroSugarSoda />
      },
      {
        path: '/CocaCola',
        element: <CocaCola />
      },
      {
        path: '/CoconutWater',
        element: <CoconutWater />
      },
      {
        path: '/NaturalSpringWater',
        element: <NaturalSpringWater />
      },
      {
        path: '/FarfallePasta',
        element: <FarfallePasta />
      },
      {
        path: '/BasmatiRice',
        element: <BasmatiRice />
      },
      {
        path: '/JasmineRice',
        element: <JasmineRice />
      },
      {
        path: '/Sugar',
        element: <Sugar />
      },
      {
        path: '/Flour',
        element: <Flour />
      },
      {
        path: '/Salt',
        element: <Salt />
      },
      {
        path: '/Pepper',
        element: <Pepper />
      },
      {
        path: '/VegetableOil',
        element: <VegtableOil />
      },
      {
        path: '/VanillaIceCream',
        element: <VanillaIceCream />
      },
      {
        path: '/ChocolateIceCrea',
        element: <ChocolateIceCream />
      },
      {
        path: '/VegetableOil',
        element: <Waffles />
      },
      {
        path: '/VegetableOil',
        element: <TaterTots />
      },
      {
        path: '/VegetableOil',
        element: <PepperoniPizza />
      },
      {
        path: '/VegetableOil',
        element: <FrenchFries />
      }
    ]
  }
]);


const rootElement = document.getElementById('root');
if(rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
