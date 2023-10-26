import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";

const data = [
  {
    country: "India",
    states: [
      { state: "Maharashtra", cities: ["Mumbai", "Pune", "Delhi", "Nagpur"] },
      { state: "Tamil Nadu", cities: ["Chennai", "Coimbatore", "Madurai"] },
      { state: "Karnataka", cities: ["Bangalore", "Mysore", "Hubli"] },
    ],
  },
  {
    country: "Bangladesh",
    states: [
      { state: "Dhaka", cities: ["Dhaka", "Chittagong", "Sylhet"] },
      { state: "Khulna", cities: ["Khulna", "Jessore", "Bagerhat"] },
      { state: "Rajshahi", cities: ["Rajshahi", "Bogra", "Pabna"] },
    ],
  },
  {
    country: "United States",
    states: [
      {
        state: "California",
        cities: ["Los Angeles", "San Francisco", "San Diego"],
      },
      { state: "Texas", cities: ["Houston", "Austin", "Dallas"] },
      { state: "New York", cities: ["New York City", "Buffalo", "Albany"] },
    ],
  },
  {
    country: "United Kingdom",
    states: [
      { state: "England", cities: ["London", "Manchester", "Birmingham"] },
      { state: "Scotland", cities: ["Edinburgh", "Glasgow", "Aberdeen"] },
      { state: "Wales", cities: ["Cardiff", "Swansea", "Newport"] },
    ],
  },
];

const AddressForm = ({ values, handleChange, getAddress, errors }) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const handleCountryChange = (e) => {
    const country = e.target.value;
    setSelectedCountry(country);
    setSelectedState("");
    setSelectedCity("");
  };

  const handleStateChange = (e) => {
    const state = e.target.value;
    setSelectedState(state);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    const city = e.target.value;
    setSelectedCity(city);
  };

  useEffect(() => {
    getAddress({
      country: selectedCountry,
      state: selectedState,
      city: selectedCity,
    });
  }, [selectedCity]);

  return (
    <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
      <h2 style={{ textAlign: "center" }}>Address Information</h2>
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item xs={12} md={4}>
          <FormControl fullWidth>
            <InputLabel>Country</InputLabel>
            <Select value={selectedCountry} onChange={handleCountryChange}>
              {data.map((item, index) => (
                <MenuItem key={index} value={item.country}>
                  {item.country}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        {selectedCountry && (
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>State</InputLabel>
              <Select value={selectedState} onChange={handleStateChange}>
                {data
                  .find((item) => item.country === selectedCountry)
                  .states.map((state, index) => (
                    <MenuItem key={index} value={state.state}>
                      {state.state}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
        )}
        {selectedState && (
          <Grid item xs={12} md={4}>
            <FormControl fullWidth>
              <InputLabel>City</InputLabel>
              <Select value={selectedCity} onChange={handleCityChange}>
                {data
                  .find((item) => item.country === selectedCountry)
                  .states.find((state) => state.state === selectedState)
                  .cities.map((city, index) => (
                    <MenuItem key={index} value={city}>
                      {city}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Grid>
        )}
        <Grid item xs={12} md={6}>
          <TextField
            label="Address 1"
            name="addressOne"
            value={values?.addressOne}
            onChange={handleChange}
            error={errors?.addressOne}
            helperText={errors?.addressOne}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Address 2"
            name="addressTwo"
            value={values?.addressTwo}
            onChange={handleChange}
            error={errors?.addressTwo}
            helperText={errors?.addressTwo}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Near By Location"
            name="nearByLocation"
            value={values?.nearByLocation}
            onChange={handleChange}
            error={errors?.nearByLocation}
            helperText={errors?.nearByLocation}
            variant="outlined"
            fullWidth
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            label="Zipcode"
            name="zipcode"
            value={values?.zipcode}
            onChange={handleChange}
            error={errors?.zipcode}
            helperText={errors?.zipcode}
            variant="outlined"
            fullWidth
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default AddressForm;
