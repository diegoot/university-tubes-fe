// Material UI imports
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Paper from "@mui/material/Paper";

interface TubeUnitProps {
  tubesWorkingHours: number[];
  color: string;
}

const TubeUnit = (props: TubeUnitProps) => {
  const { tubesWorkingHours, color } = props;

  return (
    <Paper elevation={3}>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <List>
          {tubesWorkingHours.map((tubeWorkingHours, index) => (
            // In this case it is ok to use index as key because
            // either all values get refreshed or keep the same
            <ListItem key={index}>
              <ListItemIcon>
                <LightbulbIcon sx={{ color }} />
              </ListItemIcon>
              {tubeWorkingHours}
            </ListItem>
          ))}
        </List>
      </Box>
    </Paper>
  );
};

export default TubeUnit;
