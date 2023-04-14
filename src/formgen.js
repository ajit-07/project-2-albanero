import React, { useState } from "react";
import { TextField, InputLabel, Select, MenuItem, Autocomplete, Button } from "@mui/material";
import './App.css'

function FormGenerator({ metadata }) {
    const [formData, setFormData] = useState({});

    const handleInputChange = (event) => {
        const { name, value, checked } = event.target;
        const newValue = event.target.type === "checkbox" ? checked : value;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: newValue,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(formData));
    };

    return (
        <div className="main-div">
            <div className="form-container">
                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <div className="inside-form">
                        {metadata.map((field, index) => {
                            switch (field.type) {
                                case "input":
                                    return (
                                        <div key={index} className="form-child">
                                            <TextField
                                                type="text"
                                                name={field.name}
                                                onChange={handleInputChange}
                                                variant="outlined"
                                                label={field.label}
                                            />
                                        </div>
                                    );

                                case "dropdown":
                                    return (
                                        <div key={index} className="form-child">
                                            <InputLabel id="demo-simple-select-label">{field.label}</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                name={field.name}
                                                label={field.label}
                                                onChange={handleInputChange}>
                                                {field.options.map((option, index) => (
                                                    <MenuItem key={index} value={option.value}>{option.label}</MenuItem>
                                                ))}
                                            </Select>
                                        </div>
                                    );

                                case "checkbox":
                                    return (
                                        <div key={index} className="form-child">
                                            <input
                                                type="checkbox"
                                                name={field.name}
                                                onChange={handleInputChange}
                                            />
                                            <label>{field.label}</label>
                                        </div>
                                    );
                                case "autocomplete":

                                    return (
                                        <div key={index} className="form-child">
                                            <Autocomplete
                                                name={field.name}
                                                options={field.options}
                                                onChange={(event, value) => {
                                                    const newValue = value ? value : "";
                                                    console.log(newValue)
                                                    setFormData((prevFormData) => ({
                                                        ...prevFormData,
                                                        [field.name]: newValue.label,
                                                    }));
                                                }}
                                                renderInput={(params) => (
                                                    <TextField {...params} label={field.label} />
                                                )}
                                            />
                                        </div>

                                    );
                                default:
                                    return null;
                            }
                        })}
                    </div>
                </form >
            </div>
            <div className="button-div">
                <Button variant="contained" type="submit">Submit</Button>
            </div>
        </div>
    );
}
export default FormGenerator;

