import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  TextField,
  Button,
  Grid,
  Container,
  CardHeader,
  Divider,
} from "@mui/material";
import { AppDispatch } from "src/store";
import { useDispatch } from "react-redux";
import { Helmet } from "react-helmet-async";
import { PostType } from "src/store/types/post/post";
import { updatePostEffect } from "src/store/effects/post/post.effect";

type EditPostProps = {
  post: PostType;
};

const EditPost: React.FC<EditPostProps> = ({ post }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<PostType>(post);

  const fieldTypes: { [key in keyof PostType]: string } = {
    title: 'text',
    description: "text",
    postFormat: "text",
    date: "text", // Assuming date as string for easier serialization, can be Date if handled as Date objects
    slug: "text",
  };

  const [errors, setErrors] = useState<Partial<PostType>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Clear error when user starts typing
  };

  const handleSubmit = () => {
    const formErrors: Partial<PostType> = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof PostType]) {
        formErrors[key as keyof any] = "This field is required";
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (post?.id) dispatch(updatePostEffect(post.id, formData, navigate));
  };

  return (
    <>
      <Helmet>
        <title>Forms - Components</title>
      </Helmet>
      <Container maxWidth="lg" sx={{ mt: 10 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={10}
        >
          <Grid item xs={12}>
            <Card>
              <CardHeader title="Input Fields" />
              <Divider />
              <CardContent>
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="stretch"
                    spacing={3}
                  >
                    {Object.keys(formData).map((key: keyof PostType) => (
                      <Grid item xs={12} sm={4} key={key}>
                        <TextField
                          id={key}
                          label={key}
                          value={formData[key]}
                          onChange={handleChange}
                          variant="filled"
                          required
                          inputProps={{ readOnly: key === "id" ? true : false }}
                          error={!!errors[key]}
                          helperText={errors[key]}
                          type={fieldTypes[key]}
                        />
                      </Grid>
                    ))}
                  </Grid>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    marginTop: 2,
                  }}
                >
                  <Button
                    type="button"
                    variant="contained"
                    color="primary"
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default EditPost;
