import { Link, useLocation, useNavigate } from "react-router-dom";
import CheckList from "../checkList/CheckList";
import { intolerancesOptionsList } from "../checkList/intolerances.js";
import { dietOptionsList } from "../checkList/diets.js";
import { ingredientsOptionsList } from "../checkList/ingredients.js";
import "./Input.css"
import AnimatedPage from "../../AnimatedPage";
import { Button } from "@chakra-ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";
import { createContext, useContext, useState } from "react";


export const DirectionContext = createContext();


function Input({ chosenOptions, setChosenOptions }) {
    const navigate = useNavigate();
    const location = useLocation();
    // console.log(location.pathname);

    // navigate("/helloUser");

    const optionsList = inputSelector();
    const [direction, setDirection] = useState("right");
    // console.log("Direction is " + direction);


    return (
        <>
            <DirectionContext.Provider value={direction}>
                {/* {console.log("Context is " + useContext(DirectionContext))} */}
                <AnimatedPage>
                    <div id="container">
                        <h1>Please enter your: <span>{location.pathname.slice(1)}</span></h1>
                        <p>*if there are none just click next</p>
                        <CheckList optionsList={optionsList[0]} chosenOptions={chosenOptions} setChosenOptions={setChosenOptions} />
                        {/* {console.log(optionsList[0])} */}
                    </div>
                </AnimatedPage>
                <div id="buttonContainer">
                    <Link to={optionsList[1]}>
                        <Button className="button" style={{ marginRight: "10px" }} leftIcon={<ArrowLeftIcon />}
                            onClick={() => { setDirection("left") }}>
                            {/* , navigate(optionsList[1])  */}
                            Prev
                        </Button>
                    </Link>
                    <Link to={optionsList[2]}>
                        <Button className="button" rightIcon={<ArrowRightIcon />}
                            onClick={() => { setDirection("right") }}>
                            Next
                        </Button>
                    </Link>
                </div>
            </DirectionContext.Provider>
        </>
    );
}

export default Input;


function inputSelector() {
    if (location.pathname === "/intolerances") {
        return [intolerancesOptionsList, "/", "/diet"];
    }
    else if (location.pathname === "/diet") {
        return [dietOptionsList, "/intolerances", "/ingredients"];
    }
    else if (location.pathname === "/ingredients") {
        return [ingredientsOptionsList, "/diet", "/recipes"];
    }
    else {
        // console.log("How the fuck did you get here??");
        return [ingredientsOptionsList, ,]
    }
}