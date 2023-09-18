import { useState } from 'react'
import './App.css'
import { Route, Routes, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage/LandingPage';
import Input from './components/Inputs/Input';
import Recipes from './Recipes/Recipes';



//rfce
function App() {

    const location = useLocation();
    const [chosenOptions, setChosenOptions] = useState({
        intolerances: null,
        diet: null,
        ingredients: null
    });
    console.log(chosenOptions)
    return (
        <>
                <AnimatePresence mode='wait'>
                    <Routes key={location.pathname} location={location}>
                        <Route path="/" element={<LandingPage />} />
                        <Route path="/intolerances" element={<Input chosenOptions={chosenOptions} setChosenOptions={setChosenOptions} />} />
                        <Route path="/diet" element={<Input chosenOptions={chosenOptions} setChosenOptions={setChosenOptions} />} />
                        <Route path="/ingredients" element={<Input chosenOptions={chosenOptions} setChosenOptions={setChosenOptions} />} />
                        <Route path="/recipes" element={<Recipes chosenOptions={chosenOptions} />} />
                    </Routes>
                </AnimatePresence >
        </>
    )
}

export default App











function changeLabel(x) {
    // import { optionsList } from './try';
    const works = x.split(";")
    const string = works[0];
    const stillWorks = string[0].toUpperCase() +
        string.slice(1);
    return stillWorks;
    {/* <p>{optionsList.map((index) => {return `{ value: "${index.yes}", label: "${changeLabel(index.yes)}"},`})}</p> */ }
}