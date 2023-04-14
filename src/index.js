import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <App />
  </>
);









































/*
/*
how to resue only one input filed component from mui and reuse it using state to show multiple input fields in reactjs
To reuse a single input field component from MUI and show multiple input fields using state in ReactJS, you can follow these steps:

Import the input field component from MUI:

javascript
Copy code
import { TextField } from '@mui/material';
Create a functional component for the input field, and pass props to it:

javascript
Copy code
function InputField({ label, value, onChange }) {
  return (
    <TextField
      label={label}
      value={value}
      onChange={onChange}
    />
  );
}
Create state for the input values, and a function to handle changes:

php
Copy code
const [inputValues, setInputValues] = useState({
  field1: '',
  field2: '',
  field3: '',
});

function handleInputChange(event) {
  const { name, value } = event.target;
  setInputValues((prevValues) => ({
    ...prevValues,
    [name]: value,
  }));
}
Render the input field component multiple times, passing in the appropriate props:

php
Copy code
<InputField
  label="Field 1"
  name="field1"
  value={inputValues.field1}
  onChange={handleInputChange}
/>
<InputField
  label="Field 2"
  name="field2"
  value={inputValues.field2}
  onChange={handleInputChange}
/>
<InputField
  label="Field 3"
  name="field3"
  value={inputValues.field3}
  onChange={handleInputChange}
/>
With these steps, you can reuse the input field component from MUI and manage multipl*/
