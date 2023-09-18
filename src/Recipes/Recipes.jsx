import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Recipes.css'
import { Link } from 'react-router-dom';
import { Button } from '@chakra-ui/button';
import { ArrowLeftIcon } from '@chakra-ui/icons';


const API_KEY = import.meta.env.VITE_API_KEY;

function Recipes({ chosenOptions }) {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const request = createRequest(chosenOptions);
        console.log(request);
        axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}${request}&&number=9`)
            .then((response) => {
                setRecipes(response.data.results);
            })
            .catch((error) => {
                console.error('Error fetching recipes:', error);
            });
    }, []);

    // const response = apiFetch(request);
    // console.log(request);
    console.log("text ", recipes);
    return (
        <>
        <div id="appetitContainer"><h1>Bon appetit</h1></div>
        
            <div className="recipe-grid">
                {recipes.map((recipe, index) => (
                    <div key={index} className="recipe-card">
                        <a href={recipe.spoonacularSourceUrl} target='_blank'>
                        <img src={recipe.image} alt={recipe.title} /></a>
                        <h2>{recipe.title}</h2>
                        {/* <p>{recipe.summary}</p> */}
                        {/* You can display other recipe information here */}
                    </div>
                ))}
            </div>
            <div id="buttonContainer">
                    <Link to={"/ingredients"}>
                        <Button className="button" style={{ marginRight: "10px" }} leftIcon={<ArrowLeftIcon />}>
                            Back
                        </Button>
                    </Link>
                </div>
        </>
    )
}

export default Recipes




// async function apiFetch(request) {
//     const response = await axios.get(
//         `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}${request}&&number=9`
//     );
//     console.log(response);
//     return response;
// }

function createRequest(chosenOptions) {
    const intolerancesValues = stringifyValues(chosenOptions.intolerances);
    const dietValues = stringifyValues(chosenOptions.diet);
    const ingredientsValuesWithId = stringifyValues(chosenOptions.ingredients);
    const ingredientsValues = ingredientsValuesWithId ? ingredientsValuesWithId.replace(/;\d+/g, '') : false;
    let request = "&&addRecipeInformation=true";
    request += "&&instructionsRequired=true";
    if (intolerancesValues) { request += "&&intolerances=" + intolerancesValues; }
    if (dietValues) { request += "&&diet=" + dietValues; }
    if (ingredientsValues) { request += "&&includeIngredients=" + ingredientsValues; }

    return request;
}

function stringifyValues(params) {
    if (!params) { return false }
    const valuesArr = params.map(e => e.value);
    const valuesString = valuesArr.toString();
    return valuesString;
}

