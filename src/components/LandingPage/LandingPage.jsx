import { Parallax, Background } from "react-parallax";
import "./LandingPage.css"
import { Navigate, useNavigate } from "react-router-dom";




const image1 = "../pexels-ella-olsson-1640774.jpg";
const image2 = "../pexels-engin-akyurt-1435904.jpg";



function LandingPage() {

    const Navigate = useNavigate()

    return (

        <div>
            <Parallax bgImage={image1} strength={450}>
                <div style={{ height: "90vh" }}>
                    <div id="header" className="slideLeftReturn"><p>Become a chef</p>
                        <h1>Just 3 easy steps</h1>
                        <p>discover the world of easy cooking,<br /> all while not leaving the house!</p></div>
                </div>
            </Parallax>
            <div style={{ width: "100%", height: "10vh", background: "white" }}>
                <div class="down-arrow"></div>
            </div>
            <Parallax bgImage={image2} strength={450}>
                <div style={{ height: "100%" }}>
                    <div id="grid-container">
                        <div>
                            <h1>Step 1:</h1>
                            <p>Choose any intolerances you have. Mark as many as you'd like and make sure to take your guests into consideretion!</p>
                            <a href="https://spoonacular.com/food-api/docs#Intolerances" target="_blank">Supported list</a>
                        </div>
                        <div>
                            <h1>Step 2:</h1>
                            <p>Choose the right dietery prefences you'd like to follow! Enjoy a delicios meal that fits you perfectly!</p>
                            <a href="https://spoonacular.com/food-api/docs#Diets" target="_blank">Supported list</a>
                        </div>
                        <div>
                            <h1>Step 3:</h1>
                            <p>Lastly, Choose the ingredients you have at home, or can get access to, no meal is made without the perfect ingredients.
                                The more you choose the better It's going to work!</p>
                        </div>
                    </div>
                    <button class="button" onClick={()=> {Navigate("/intolerances")}}>
                        Get started
                        <svg fill="currentColor" viewBox="0 0 24 24" class="icon">
                            <path clip-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z" fill-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </Parallax>
        </div>
    )
}

export default LandingPage
