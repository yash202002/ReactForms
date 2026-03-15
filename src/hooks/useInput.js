import { useState } from "react";

//This custom hook is used once per input in our form
export function useInput(defaultValue , validationFn) {
    const [enteredValue, setEnteredValue] = useState(defaultValue);

    const [didEdit, setdidEdit] = useState(false);

    const valueIsValid = validationFn(enteredValue);

    function handleInputChange(event) {

        setEnteredValue(event.target.value);
        setdidEdit(false);


    }

    function handleInputBlur() {
        setdidEdit(true);
    }

    return {
        value : enteredValue,
        handleInputBlur,
        handleInputChange,
        hasError: didEdit && !valueIsValid
    };






}