import { FC } from "react";
import { useNavigate } from "react-router-dom";
import AddTwoToneIcon from "@mui/icons-material/AddTwoTone";
import { Typography, Button, Grid } from "@mui/material";

interface PostPageTitleProps {
  heading?: string;
  subHeading?: string;
  docs?: string;
  postId?: string; // Changed from tireId to postId
}

const PostPageTitle: FC<PostPageTitleProps> = ({
  heading = "",
  subHeading = "",
  docs = "",
  postId, // Changed from tireId to postId
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
            navigate(`/admin/posts/new`); // Changed from /admin/tires to /admin/posts
          }}
        >
          Add Post
        </Button>
        <Button
          sx={{ mt: { xs: 2, md: 0 }, ml: 5 }}
          variant="contained"
          startIcon={<AddTwoToneIcon fontSize="small" />}
          onClick={() => {
            navigate(`/admin/posts/${postId}/edit`); // Changed from /admin/tires to /admin/posts
          }}
        >
          Edit Post
        </Button>
      </Grid>
    </Grid>
  );
};

export default PostPageTitle;
