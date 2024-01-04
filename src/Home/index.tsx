// Material UI imports
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Box from "@mui/system/Box";
import Typography from "@mui/material/Typography";
import green from "@mui/material/colors/green";
import indigo from "@mui/material/colors/indigo";
import yellow from "@mui/material/colors/yellow";
import purple from "@mui/material/colors/purple";
// React router imports
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "center", pt: "20px", pb: "20px" }}
    >
      <Paper elevation={3} sx={{ width: "70%", p: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} textAlign="center">
            <LightbulbIcon
              sx={{ color: green[500], fontSize: { xs: 40, md: 80 } }}
            />
            <LightbulbIcon
              sx={{ color: indigo[500], fontSize: { xs: 40, md: 80 } }}
            />
            <LightbulbIcon
              sx={{ color: yellow[500], fontSize: { xs: 40, md: 80 } }}
            />
            <LightbulbIcon
              sx={{ color: purple[500], fontSize: { xs: 40, md: 80 } }}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" gutterBottom>
              University tubes is a web application that lets you simulate how
              much money you would spend in fluorecent tubes for a given course
              according to the time they are used. It also tells you how many
              tubes will broken during that period of time.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6} textAlign="right">
            <Button
              component={Link}
              to="/simulator"
              variant="contained"
              sx={{ width: "100%" }}
            >
              New simuilation
            </Button>
          </Grid>
          <Grid item xs={12} md={6} textAlign="left">
            <Button variant="contained" sx={{ width: "100%" }}>
              Previous simulations
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default Home;
