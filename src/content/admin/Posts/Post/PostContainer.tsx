import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Helmet } from "react-helmet-async";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import PostPageTitle from "./PostPageTitle";
import { PostType } from "src/store/types/post/post";
import Slideshow from "src/components/public/Slideshow";

type PostProps = {
  post: PostType;
};

const PostContainer: React.FC<PostProps> = ({ post }) => {
  let images: string[] = [""];
  if (post?.imageUrl) {
    images = post?.imageUrl
      .split(";")
      .filter((item: any) => item !== "undefined");
  }

  return (
    <>
      <Helmet>
        <title>Post Details</title>
      </Helmet>
      <PageTitleWrapper>
        <PostPageTitle
          heading="Trie Details"
          subHeading="View details of the selected post"
          docs=""
          postId={post?.id}
        />
      </PageTitleWrapper>
      <Box sx={{ flexGrow: 1, bgcolor: "background.paper", py: 4 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Slideshow images={images} />
          </Grid>
          <Grid item xs={12} md={6}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                  {post?.title || "Post title"}
                </Typography>
                <Divider />
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong>ID:</strong> {post?.id || "-"}
                </Typography>
                <Typography variant="body1" color="text.secondary" paragraph>
                  <strong> Description:</strong> {post?.description || "-"}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default PostContainer;
