import React, { useEffect, useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
import Container from "@mui/material/Container";

const Dashboard = () => {
  const [user, setUser] = useState([]);

  const {
    firstName,
    lastName,
    addressOne,
    addressTwo,
    city,
    confirmPassword,
    contactNo,
    country,
    email,
    gender,
    nearByLocation,
    password,
    state,
    zipcode,
  } = user;
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("data")) || [];
    setUser(data);
  }, []);
  return (
    <Container>
      <Paper elevation={3} sx={{ p: 1, mt: 3 }}>
        <h2 style={{ textAlign: "center" }}>User Details</h2>
        <Grid container spacing={3} sx={{ p: 2 }}>
          {/*---------------------------------------------------User General details */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                mt: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: 400,
              }}
            >
              <Typography variant="h6">
                Name:&nbsp;
                <b>
                  {firstName} {lastName}
                </b>
              </Typography>
              <Typography>
                Contact No.:&nbsp;<b>{contactNo}</b>
              </Typography>
              <Typography>
                Email:&nbsp;<b>{email}</b>
              </Typography>
              <Typography>
                Gender:&nbsp;<b>{gender}</b>
              </Typography>
              <Typography>
                Hobbies:&nbsp;
                {Array.isArray(user?.hobbies) &&
                  user?.hobbies.map((hobby) => {
                    return (
                      <b
                        key={hobby}
                        style={{ textTransform: "capitalize" }}
                      >{`${hobby}, `}</b>
                    );
                  })}
              </Typography>
            </Paper>
          </Grid>

          {/*-----------------------------------------------------User Address details */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                mt: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "center",
                minHeight: 400,
              }}
            >
              <Typography>
                Address 1:&nbsp;<b>{addressOne}</b>
              </Typography>
              <Typography>
                Address 2:&nbsp;<b>{addressTwo}</b>
              </Typography>
              <Typography>
                Near By Location:&nbsp;<b>{nearByLocation}</b>
              </Typography>
              <Typography>
                City:&nbsp;<b>{city}</b>
              </Typography>
              <Typography>
                State:&nbsp;<b>{state}</b>
              </Typography>
              <Typography>
                Country:&nbsp;<b>{country}</b>
              </Typography>
              <Typography>
                ZipCode / PinCode:&nbsp;<b>{zipcode}</b>
              </Typography>
            </Paper>
          </Grid>

          {/*----------------------------------------------------User Education details */}
          <Grid item xs={12} md={4}>
            <Paper
              elevation={3}
              sx={{
                p: 2,
                mt: 2,
                minHeight: 400,
              }}
            >
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                Education :&nbsp;
                {Array.isArray(user?.education) &&
                  user?.education.map((edu, i) => {
                    return (
                      <div key={i}>
                        <Divider textAlign="right">
                          <Chip label={edu?.type} color="success" />
                        </Divider>
                        <Typography>
                          Year:&nbsp;<b>{edu?.year}</b>
                        </Typography>
                        <Typography>
                          School:&nbsp;<b>{edu?.school}</b>
                        </Typography>
                        <Typography>
                          Percentage:&nbsp;<b>{edu?.percentage}</b>
                        </Typography>
                      </div>
                    );
                  })}
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default Dashboard;
