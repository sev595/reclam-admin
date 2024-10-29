import { FC } from "react";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { Typography, Button, Grid } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface UserPageTitleProps {
  heading?: string;
  subHeading?: string;
  docs?: string;
  userId?: string;
}

const UserPageTitle: FC<UserPageTitleProps> = ({
  heading = "",
  subHeading = "",
  docs = "",
  userId,
}) => {
  const navigate = useNavigate();

  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          {heading}
        </Typography>
        <Typography variant="subtitle2">{subHeading}</Typography>
      </Grid>
      <Grid item>
        <Button
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={() => {
            navigate(`/admin/users/new`);
          }}
        >
          Add User
        </Button>
        <Button
          sx={{ mt: { xs: 2, md: 0 }, ml: 4 }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={() => {
            navigate(`/admin/users/${userId}/edit`);
          }}
        >
          Edit User
        </Button>
      </Grid>
    </Grid>
  );
};

export default UserPageTitle;
