import React, { useState } from "react";
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
import PageTitleWrapper from "src/components/PageTitleWrapper";
import { UserType } from "src/store/types/user/user";
import { createUserEffect } from "src/store/effects/user/user.effect";
import UserRoleSelection from "src/components/public/UserRoleSelection/UserRoleSelection";
import { useToasts } from "react-toast-notifications";

const NewUser: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const [formData, setFormData] = useState<UserType>({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    password: "",
    role: "user",
    address:''
  });

  const fieldTypes: { [key in keyof UserType]: string } = {
    firstName: "text",
    lastName: "text",
    phoneNumber: "text",
    email: "text",
    password: "text",
    role: "text",
    address:"text"
  };

  const [errors, setErrors] = useState<Partial<UserType>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" }); // Clear error when user starts typing
  };

  const handleSubmit = () => {
    const formErrors: Partial<UserType> = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof UserType]) {
        formErrors[key as keyof UserType] = "This field is required";
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setLoading(true);
    dispatch(createUserEffect(formData, setLoading, addToast, navigate));
  };

  return (
    <>
      <Helmet>
        <title>Create User</title>
      </Helmet>
      <Container maxWidth="lg" sx={{ mt: 6 }}>
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
                    {Object.keys(formData).map(
                      (key: keyof UserType, index: number) => {
                        if (key === "role") return;
                        return (
                          <Grid item xs={12} sm={4} key={key}>
                            <TextField
                              id={key}
                              label={key}
                              value={formData[key]}
                              onChange={handleChange}
                              variant="filled"
                              required
                              error={!!errors[key]}
                              helperText={errors[key]}
                              type={fieldTypes[key]}
                            />
                          </Grid>
                        );
                      }
                    )}
                    <Grid item xs={12} sm={4}>
                      <UserRoleSelection
                        handleChange={handleChange}
                        value={formData["role"]}
                      />
                    </Grid>
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
                    disabled={loading}
                  >
                    {loading ? "Loading" : "Submit"}
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

export default NewUser;
