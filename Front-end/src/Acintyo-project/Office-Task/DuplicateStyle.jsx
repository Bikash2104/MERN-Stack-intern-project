/* eslint-disable react/prop-types */
import { Button, TextField } from "@mui/material";
import { forwardRef, useImperativeHandle, useState } from "react";
// import { muiInputStyles } from "../../Utils/Utils";
// import "./ExtendedInputs.scss";
import { Icon } from "@iconify/react/dist/iconify.js";

const ExtendedInputs = forwardRef(({ inputlabel }, ref) => {
  const [inputValues, setInputValues] = useState([""]);
  const [error, setError] = useState("");

  const addInputField = () => {
    if (
      inputValues.reduce(
        (accumulator, currentValue) =>
          "" === currentValue.trim() ? accumulator + 1 : accumulator,
        0
      ) !== 0
    ) {
      // hi
    } else {
      setInputValues([...inputValues, ""]);
    }
  };

  useImperativeHandle(ref, () => ({
    inputValues,
    setInputValues,
  }));

  const removeInputField = (indexToRemove) => {
    const updatedValues = inputValues.filter(
      (_, index) => index !== indexToRemove
    );
    setInputValues(updatedValues);
  };
  const handleInputChange = (index, value) => {
    const updatedValues = [...inputValues];
    updatedValues[index] = value;
    setInputValues(updatedValues);
  };

  return (
    <div className="ext-input-container">
      <div>
        {inputValues.map((_, index) => (
          <div key={index}>
            <TextField
              size="medium"
              type="text"
              id={`fullName${index}`}
              label={`${inputlabel} ${index === 0 ? "" : index + 1}`}
              variant="outlined"
              //   sx={muiInputStyles}
              value={inputValues[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
              helperText={error}
              FormHelperTextProps={{ style: { color: "red" } }}
            />

            {inputValues.length !== 1 && (
              <Icon icon="uiw:delete" onClick={() => removeInputField(index)} />
            )}
          </div>
        ))}
      </div>

      <Button onClick={addInputField}>+ Add More</Button>
    </div>
  );
});

export default ExtendedInputs;
