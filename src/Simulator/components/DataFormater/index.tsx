// Material UI imports
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

interface DataFormaterProps {
  label: string;
  value: number;
}

const DataFormater = (props: DataFormaterProps) => {
  const { label, value } = props;

  return (
    <Paper elevation={3}>
      <Typography variant="h6">{label}</Typography>
      <Typography>{value}</Typography>
    </Paper>
  );
};

export default DataFormater;
