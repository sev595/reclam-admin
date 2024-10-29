import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Button, Grid } from "@mui/material";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";

function PostsPageHeader() {
  const navigate = useNavigate();
  return (
    <Grid container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" component="h3" gutterBottom>
          Posts
        </Typography>
      </Grid>
      <Grid item>
        <Button
          onClick={() => {
            navigate(`/admin/posts/new`);
          }}
          sx={{ mt: { xs: 2, md: 0 } }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
        >
          Create post
        </Button>
      </Grid>
     
    </Grid>
  );
}

export default PostsPageHeader;
