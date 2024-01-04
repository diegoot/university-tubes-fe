// React imports
import { useEffect, useState } from "react";
// Material UI imports
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import green from "@mui/material/colors/green";
import indigo from "@mui/material/colors/indigo";
import yellow from "@mui/material/colors/yellow";
import purple from "@mui/material/colors/purple";
// React router imports
import { Link } from "react-router-dom";
// Own imports
import TubeUnit from "./components/TubeUnit";
import DataFormater from "./components/DataFormater";
import {
  HOURS_A_DAY,
  DAYS_A_WEEK,
  MONTHS_A_YEAR,
  TUBE_COST,
  WEEKS_A_MONTH,
  TUBES_PER_UNIT,
  FIXED_COST,
} from "./constants";
import rand from "./utils/rand";
import algorithm from "./utils/algorithm";

const Simulator = () => {
  const [tubesUnit1, setTubesUnit1] = useState<number[]>([]);
  const [tubesUnit2, setTubesUnit2] = useState<number[]>([]);
  const [tubesUnit3, setTubesUnit3] = useState<number[]>([]);
  const [tubesUnit4, setTubesUnit4] = useState<number[]>([]);
  const [simulationDisabled, setSimulationDisabled] = useState<boolean>(false);
  const [brokenTubes, setBrokenTubes] = useState<number>(0);
  const [totalCost, setTotalCost] = useState<number>(0);

  useEffect(() => {
    setTubesUnit1([rand(), rand(), rand(), rand()]);
    setTubesUnit2([rand(), rand(), rand(), rand()]);
    setTubesUnit3([rand(), rand(), rand(), rand()]);
    setTubesUnit4([rand(), rand(), rand(), rand()]);
  }, []);

  const handleSimulate = () => {
    setSimulationDisabled(true);
    const simulation = algorithm(
      [tubesUnit1, tubesUnit2, tubesUnit3, tubesUnit4],
      HOURS_A_DAY * DAYS_A_WEEK * MONTHS_A_YEAR * WEEKS_A_MONTH
    );
    setBrokenTubes(simulation[0]);
    const totalCost = simulation[1] * TUBE_COST * TUBES_PER_UNIT + FIXED_COST;
    setTotalCost(totalCost);
    // No need to wait, if not saved nothing happens in this case
    fetch("http://localhost:3000/api/v1/simulations", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        api_v1_simulation: {
          hoursDay: HOURS_A_DAY,
          daysWeek: DAYS_A_WEEK,
          months: MONTHS_A_YEAR,
          tubesConfiguration: JSON.stringify([
            tubesUnit1,
            tubesUnit2,
            tubesUnit3,
            tubesUnit4,
          ]),
          cost: totalCost,
          brokenTubes: simulation[0],
        },
      }),
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        pt: "20px",
        pb: "20px",
      }}
    >
      <Paper elevation={3} sx={{ width: "70%", p: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4} textAlign="center">
            <DataFormater label="hours a day" value={HOURS_A_DAY} />
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <DataFormater label="days a week" value={DAYS_A_WEEK} />
          </Grid>
          <Grid item xs={12} md={4} textAlign="center">
            <DataFormater label="months a year" value={MONTHS_A_YEAR} />
          </Grid>
          <Grid item xs={6} md={3} textAlign="center">
            <TubeUnit tubesWorkingHours={tubesUnit1} color={green[500]} />
          </Grid>
          <Grid item xs={6} md={3} textAlign="center">
            <TubeUnit tubesWorkingHours={tubesUnit2} color={indigo[500]} />
          </Grid>
          <Grid item xs={6} md={3} textAlign="center">
            <TubeUnit tubesWorkingHours={tubesUnit3} color={yellow[500]} />
          </Grid>
          <Grid item xs={6} md={3} textAlign="center">
            <TubeUnit tubesWorkingHours={tubesUnit4} color={purple[500]} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              sx={{ width: "100%" }}
              disabled={simulationDisabled}
              onClick={handleSimulate}
            >
              Simulate
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              component={Link}
              to="/"
              variant="contained"
              sx={{ width: "100%" }}
            >
              Go back
            </Button>
          </Grid>
        </Grid>
        {simulationDisabled && (
          <Box sx={{ pt: "20px" }}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6} textAlign="center">
                <DataFormater label="Broken tubes" value={brokenTubes} />
              </Grid>
              <Grid item xs={12} md={6} textAlign="center">
                <DataFormater label="Total cost" value={totalCost} />
              </Grid>
            </Grid>
          </Box>
        )}
      </Paper>
    </Box>
  );
};

export default Simulator;
