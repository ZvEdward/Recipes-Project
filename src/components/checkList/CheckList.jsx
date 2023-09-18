import React, { Component, useContext } from "react";
import { components } from "react-select";
import makeAnimated from "react-select/animated";
import MySelect from "./MySelect.jsx";
import { useLocation } from "react-router-dom";

function Option(props) {
    //Displays options?
    return (
        <div>
            <components.Option {...props}>
                <input
                    type="checkbox"
                    checked={props.isSelected}
                    onChange={() => null}
                />{" "}
                <label>{props.label}</label>
            </components.Option>
        </div>
    );
}

const allOption = {
    label: "Select all",
    value: "*",
};

function ValueContainer({ children, ...props }) {
    const currentValues = props.getValue();
    let toBeRendered = children;
    if (currentValues.some((val) => val.value === allOption.value)) {
        toBeRendered = [[children[0][0]], children[1]];
    }

    return (
        <components.ValueContainer {...props}>
            {toBeRendered}
        </components.ValueContainer>
    );
}

function MultiValue(props) {
    let labelToBeDisplayed = `${props.data.label} `;
    if (props.data.value === allOption.value) {
        labelToBeDisplayed = "All is selected";
    }
    return (
        <components.MultiValue {...props}>
            <span>{labelToBeDisplayed}</span>
        </components.MultiValue>
    );
}

const animatedComponents = makeAnimated();


let optionsList;
let chosenOptions;
let setChosenOptions;
export default class CheckList extends Component {
    constructor(props) {
        const currentLoc = location.pathname.slice(1)
        optionsList = props.optionsList;
        setChosenOptions = props.setChosenOptions;
        chosenOptions = props.chosenOptions
        super(props);
        this.state = {
            optionSelected: chosenOptions[currentLoc] ? chosenOptions[currentLoc] : null//start with here!
        };
    };


    handleChange = selected => {
        this.setState({
            optionSelected: selected,
        });
        const currentLoc = location.pathname.slice(1)
        const obj = {};
        obj[currentLoc] = selected
        setChosenOptions((prev) => ({...prev, ...obj}))
        // setChosenOptions[currentLoc](selected)//current here!!
        // console.log(setChosenOptions[currentLoc])//current here!!
    };

    render() {
        return (
            <span
                class="d-inline-block"
                data-toggle="popover"
                data-trigger="focus"
                data-content="Please selecet account(s)"
            >
                <MySelect
                    options={optionsList}
                    isMulti
                    closeMenuOnSelect={false}
                    hideSelectedOptions={false}
                    components={{
                        Option,
                        MultiValue,
                        ValueContainer,
                        animatedComponents
                    }}
                    onChange={this.handleChange}
                    allowSelectAll={true}
                    value={this.state.optionSelected}
                />
            </span>
        );
    }
}

