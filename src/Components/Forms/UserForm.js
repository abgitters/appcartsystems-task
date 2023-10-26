import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormGroup from "@mui/material/FormGroup";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const UserForm = ({ values, handleChange, handleHobbyChange, errors }) => {
  return (
    <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
      <h2 style={{ textAlign: "center" }}>User Information</h2>
      <Grid container justifyContent="center" alignItems="center" spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            label="First Name"
            name="firstName"
            value={values?.firstName}
            onChange={handleChange}
            error={errors?.firstName}
            helperText={errors?.firstName}
            variant="outlined"
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Last Name"
            name="lastName"
            value={values?.lastName}
            onChange={handleChange}
            error={errors?.lastName}
            helperText={errors?.lastName}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Email"
            name="email"
            type="email"
            value={values?.email}
            onChange={handleChange}
            error={errors?.email}
            helperText={errors?.email}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Contact No"
            name="contactNo"
            value={values?.contactNo}
            onChange={handleChange}
            error={errors?.contactNo}
            helperText={errors?.contactNo}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Password"
            name="password"
            type="password"
            value={values?.password}
            onChange={handleChange}
            error={errors?.password}
            helperText={errors?.password}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={values?.confirmPassword}
            onChange={handleChange}
            error={errors?.confirmPassword}
            helperText={errors?.confirmPassword}
            fullWidth
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              name="gender"
              value={values?.gender}
              onChange={handleChange}
            >
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
            </RadioGroup>
          </FormControl>
        </Grid>

        <Grid item xs={12} md={6}>
          <FormControl>
            <FormLabel component="legend">Hobby</FormLabel>
            <FormGroup row>
              <FormControlLabel
                control={
                  <Checkbox
                    value="reading"
                    checked={values?.hobbies.includes("reading")}
                    onChange={handleHobbyChange}
                  />
                }
                label="Reading"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="gaming"
                    checked={values?.hobbies.includes("gaming")}
                    onChange={handleHobbyChange}
                  />
                }
                label="Gaming"
              />
              <FormControlLabel
                control={
                  <Checkbox
                    value="cooking"
                    checked={values?.hobbies.includes("cooking")}
                    onChange={handleHobbyChange}
                  />
                }
                label="Cooking"
              />
            </FormGroup>
          </FormControl>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default UserForm;
