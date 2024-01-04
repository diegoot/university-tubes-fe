// React imports
import { useEffect, useState } from "react";
// Material UI imports
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
// React router imports
import { Link } from "react-router-dom";

const Results = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [results, setResults] = useState<any[]>([]);

  useEffect(() => {
    const getResults = async () => {
      const response = await fetch("http://localhost:3000/api/v1/simulations");
      const results = await response.json();
      return results;
    };
    getResults().then((results) => {
      setResults(results);
    });
  }, []);

  return (
    <Box sx={{ display: "flex", justifyContent: "center", p: "20px" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} textAlign="right">
          <Button
            component={Link}
            to="/"
            variant="contained"
            sx={{ width: { xs: "100%", sm: "30%" } }}
          >
            Go back
          </Button>
        </Grid>
        <Grid item xs={12} textAlign="center">
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Hours a day</TableCell>
                  <TableCell align="right">Days a week</TableCell>
                  <TableCell align="right">Months a year</TableCell>
                  <TableCell align="right">Tubes configuration</TableCell>
                  <TableCell align="right">Cost</TableCell>
                  <TableCell align="right">Broken tubes</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {results.map((result) => {
                  return (
                    <TableRow key={result.id}>
                      <TableCell align="right">{result.hoursDay}</TableCell>
                      <TableCell align="right">{result.daysWeek}</TableCell>
                      <TableCell align="right">{result.months}</TableCell>
                      <TableCell align="right">
                        {result.tubesConfiguration}
                      </TableCell>
                      <TableCell align="right">{result.cost}</TableCell>
                      <TableCell align="right">{result.brokenTubes}</TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Results;
