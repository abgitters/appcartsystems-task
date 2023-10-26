import React, { useState } from "react";
import UserForm from "./Forms/UserForm";
import AddressForm from "./Forms/AddressForm";
import EducationForm from "./Forms/EducationForm";
import Button from "@mui/material/Button";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import StepLabel from "@mui/material/StepLabel";
import { useNavigate } from "react-router-dom";

const steps = [
  "User Information",
  "Address Information",
  "Education Information",
];

const Main = () => {
  const [step, setStep] = useState(0);
  const [errors, setErrors] = useState({
    userErrors: {},
    addressErrors: {},
    educationErrors: {},
  });
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    contactNo: "",
    password: "",
    confirmPassword: "",
    gender: "male",
    hobbies: [],
  });
  const [address, setAddress] = useState({
    country: "",
    state: "",
    city: "",
    addressOne: "",
    addressTwo: "",
    nearByLocation: "",
    zipcode: "",
  });
  const [education, setEducation] = useState([]);
  const [mergeAllData, setMergeAllData] = useState({});

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (step === 0) {
      setUser({ ...user, [name]: value });
    } else if (step === 1) {
      setAddress({ ...address, [name]: value });
    }
    // else if (step === 2) {
    //   // Handle education form field changes
    // }
  };

  const getAddress = ({ country, state, city }) => {
    setAddress({ ...address, country: country, state: state, city: city });
    // console.log({ country, state, city });
  };

  const getEdu = (data) => {
    setEducation(data);
  };

  const handleHobbyChange = (e) => {
    const { value } = e.target;
    const updatedHobbies = [...user.hobbies];
    if (updatedHobbies.includes(value)) {
      updatedHobbies.splice(updatedHobbies.indexOf(value), 1);
    } else {
      updatedHobbies.push(value);
    }
    setUser({
      ...user,
      hobbies: updatedHobbies,
    });
  };

  const isUserValid = () => {
    const errors = {};
    if (!user?.firstName) {
      errors.firstName = "First Name is required";
    }
    if (!user?.lastName) {
      errors.lastName = "Last Name is required";
    }
    if (!user?.email) {
      errors.email = "Email is required";
    }
    if (!user?.contactNo) {
      errors.contactNo = "Contact No is required";
    }
    if (!user?.password) {
      errors.password = "Password is required";
    }
    if (!user?.confirmPassword) {
      errors.confirmPassword = "Rechecking Password is required";
    }
    if (user?.password !== user?.confirmPassword) {
      errors.confirmPassword = "Password must be same";
    }
    setErrors({ ...errors, userErrors: errors });
    return Object.keys(errors).length === 0;
  };

  const isAddressValid = () => {
    const errors = {};
    if (!address?.addressOne) {
      errors.addressOne = "Address is required";
    }
    if (!address?.addressTwo) {
      errors.addressTwo = "Address is required";
    } else if (address?.addressOne === address?.addressTwo) {
      errors.addressTwo = "Address 1 & Address 2 not be same";
    }
    if (!address?.nearByLocation) {
      errors.nearByLocation = "Address is required";
    }
    if (!address?.zipcode) {
      errors.zipcode = "Zipcode/Pincode is required";
    } else if (address?.zipcode.length < 6) {
      errors.zipcode = "Zipcode/Pincode must be 6 digits";
    }
    setErrors({ ...errors, addressErrors: errors });
    return Object.keys(errors).length === 0;
  };

  const isEducationValid = () => {
    const errors = {};

    if (!education?.type) {
      errors.year = "First fillup education type";
    }

    setErrors({ ...errors, educationErrors: errors });
    return Object.keys(errors).length === 0;
  };
  const handleNext = () => {
    if (step === 0 && isUserValid()) {
      setStep(step + 1);
      // console.log("Users: ", user);
    } else if (step === 1 && isAddressValid()) {
      setStep(step + 1);
      // console.log("Address: ", address);
    } else if (step === 2 && isEducationValid()) {
      setStep(step + 1);
      // console.log("Education: ", education);
    }
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const setFormData = async () => {
    const edu = [...education];
    let data = { id: Date.now(), ...user, ...address, education: edu };
    setMergeAllData(data);
    localStorage.setItem("data", JSON.stringify(data));
  };
  const handleSubmit = async () => {
    await setFormData();
    console.log("Form submitted");
    // console.log("All Merged Data: ", mergeAllData);
    navigate("/login");
  };
  return (
    <Container>
      <Stepper activeStep={step} alternativeLabel>
        {Array.isArray(steps) &&
          steps.map((val) => {
            return (
              <Step key={val}>
                <StepLabel>{val}</StepLabel>
              </Step>
            );
          })}
      </Stepper>
      {step === 0 && (
        <UserForm
          values={user}
          handleChange={handleChange}
          handleHobbyChange={handleHobbyChange}
          errors={errors?.userErrors}
        />
      )}
      {step === 1 && (
        <AddressForm
          values={address}
          handleChange={handleChange}
          getAddress={getAddress}
          errors={errors?.addressErrors}
        />
      )}
      {step === 2 && (
        <EducationForm
          values={education}
          getEdu={getEdu}
          errors={errors?.educationErrors}
        />
      )}

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: step > 0 ? "space-between" : "flex-end",
          pt: 2,
        }}
      >
        {step > 0 && (
          <Button
            disabled={step === 0}
            onClick={handleBack}
            variant="contained"
            sx={{ mr: 1 }}
          >
            Back
          </Button>
        )}
        <Button
          onClick={step === steps.length - 1 ? handleSubmit : handleNext}
          variant="contained"
        >
          {step === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </Container>
  );
};

export default Main;
