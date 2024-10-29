import { useNavigate } from "react-router-dom";
import { Typography, Button, Grid, Card } from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

function UsersPageHeader() {
  const navigate = useNavigate();
  return (
    <Card
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 2,
      }}
    >
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Users
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={() => {
            navigate(`/admin/users/new`);
          }}
        >
          Create user
        </Button>
      </Grid>
    </Card>
  );
}

export default UsersPageHeader;
