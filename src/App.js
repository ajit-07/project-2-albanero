import React from 'react';
import './App.css';
import FormGenerator from './formgen';

function App() {
  const metadata = [
    {
      type: "input",
      label: "Name",
      name: "name",
    },
    {
      type: "input",
      label: "Father's Name",
      name: "fname",
    },
    {
      type: "input",
      label: "Mother's Name",
      name: "mname",
    },
    {
      type: "input",
      label: "User Name",
      name: "username",
    },
    {
      type: "input",
      label: "Address",
      name: "address",
    },
    {
      type: "input",
      label: "Phone",
      name: "phone",
    },
    {
      type: "checkbox",
      label: "Male",
      name: "male",
    },
    {
      type: "checkbox",
      label: "Female",
      name: "female",
    },
    {
      type: "checkbox",
      label: "Others",
      name: "others",
    },
    {
      type: "dropdown",
      label: "Blood Group",
      name: "bloodgroup",
      options: [
        { label: "Choose", value: "Choose" },
        { label: "A+", value: "A+" },
        { label: "B+", value: "B+" },
        { label: "O+", value: "O+" },
        { label: "Other", value: "other" },
      ],
    },
    {
      type: "autocomplete",
      label: "State",
      name: "state",
      options: [
        { label: "Telangana", value: "telangana" },
        { label: "Odisha", value: "odisha" },
        { label: "Delhi", value: "delhi" },
        { label: "Haryana", value: "haryana" },
        { label: "Tamil Nadu", value: "tamilnadu" },
        { label: "Kerala", value: "kerala" },
        { label: "Bihar", value: "bihar" },
        { label: "Uttar Pradesh", value: "uttarpradesh" },
      ],
    },

  ];

  return (
    <div>
      <FormGenerator metadata={metadata} />
    </div>
  )

}

export default App;
