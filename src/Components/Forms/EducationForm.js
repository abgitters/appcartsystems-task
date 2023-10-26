import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";

const EducationForm = ({ errors, getEdu }) => {
  const [educationEntries, setEducationEntries] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [year, setYear] = useState("");
  const [school, setSchool] = useState("");
  const [percentage, setPercentage] = useState("");

  const availableTypes = [
    "10th",
    "12th",
    "Graduation",
    "PostGraduation",
  ].filter(
    (type) => !educationEntries.map((entry) => entry.type).includes(type)
  );

  const addEducationEntry = () => {
    setEducationEntries([
      ...educationEntries,
      {
        type: selectedType,
        year: year,
        school: school,
        percentage: percentage,
      },
    ]);
    setSelectedType("");
    setYear("");
    setSchool("");
    setPercentage("");
  };

  // console.log("Edu", educationEntries);

  useEffect(() => {
    getEdu(educationEntries);
  }, [addEducationEntry]);
  return (
    <>
      <Paper elevation={2} sx={{ p: 3, mt: 3 }}>
        <h2 style={{ textAlign: "center" }}>Education Information</h2>
        <Grid container justifyContent="center" alignItems="center" spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <FormControl fullWidth>
              <InputLabel>Education Type</InputLabel>
              <Select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {availableTypes.map((type) => (
                  <MenuItem key={type} value={type}>
                    {type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              label="Passing Year"
              fullWidth
              value={year}
              error={errors?.year}
              helperText={errors?.year}
              onChange={(e) => setYear(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <TextField
              label="School/College"
              fullWidth
              value={school}
              onChange={(e) => setSchool(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={2}>
            <TextField
              label="Percentage"
              fullWidth
              value={percentage}
              onChange={(e) => setPercentage(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} md={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={addEducationEntry}
            >
              Add
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={3} sx={{ p: 2 }}>
          {educationEntries.map((entry, index) => (
            <Grid item key={index} xs={12} md={6}>
              <Paper elevation={3} sx={{ p: 2, mt: 2 }}>
                {/* <Typography variant="h6">Entry {index + 1}</Typography> */}
                <Typography variant="h6">
                  Education Type: <b>{entry.type}</b>
                </Typography>
                <Typography>
                  Passing Year:<b>{entry.year}</b>
                </Typography>
                <Typography>
                  School/College:<b> {entry.school}</b>
                </Typography>
                <Typography>
                  Percentage:<b> {`${entry.percentage} %`}</b>
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
};

export default EducationForm;
