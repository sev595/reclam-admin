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
import PageTitle from "src/components/PageTitle";
import { UserType } from "src/store/types/user/user";
import { updateUserEffect } from "src/store/effects/user/user.effect";

type EditUserProps = {
  user: UserType;
};

const EditUser: React.FC<EditUserProps> = ({ user }) => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<UserType>(user);

  const fieldTypes: { [key in keyof UserType]: string } = {
    firstName: "text",
    lastName: "text",
    phoneNumber: "text",
    email: "text",
    password: "text",
    role: "text",
    emailVerified: "text",
    address:"text"
  };
  const readonlyFields = [
    "email",
    "role",
    "emailVerified",
    "createdDate",
    "id",
  ];

  const [errors, setErrors] = useState<Partial<UserType>>({});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = event.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: "" });
  };

  const handleSubmit = () => {
    const formErrors: Partial<UserType> = {};
    Object.keys(formData).forEach((key) => {
      const item = formData[key as keyof UserType];

      if (!readonlyFields.includes(key) && !item) {
        formErrors[key as keyof UserType] = "This field is required";
      }
    });

    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    if (user.id) dispatch(updateUserEffect(user.id, formData, navigate));
  };

  return (
    <>
      <Helmet>
        <title>Forms - Components</title>
      </Helmet>
      <Container maxWidth="lg" sx={{ marginTop: "50px" }}>
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
                    <Grid item xs={12} sm={4}>
                      <TextField
                        id={"firstName"}
                        label={"First Name"}
                        value={formData["firstName"]}
                        onChange={handleChange}
                        variant="filled"
                        inputProps={{
                          readOnly: readonlyFields.includes("firstName"),
                        }}
                        required
                        error={!!errors["firstName"]}
                        helperText={errors["firstName"]}
                        type={fieldTypes["firstName"]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        id={"lastName"}
                        label={"Last Name"}
                        value={formData["lastName"]}
                        onChange={handleChange}
                        variant="filled"
                        inputProps={{
                          readOnly: readonlyFields.includes("lastName"),
                        }}
                        required
                        error={!!errors["lastName"]}
                        helperText={errors["lastName"]}
                        type={fieldTypes["lastName"]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        id={"email"}
                        label={"Email"}
                        value={formData["email"]}
                        onChange={handleChange}
                        variant="filled"
                        inputProps={{
                          readOnly: readonlyFields.includes("email"),
                        }}
                        required
                        error={!!errors["email"]}
                        helperText={errors["email"]}
                        type={fieldTypes["email"]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        id={"emailVerified"}
                        label={"Email Verified"}
                        value={formData["emailVerified"]}
                        onChange={handleChange}
                        variant="filled"
                        inputProps={{
                          readOnly: readonlyFields.includes("emailVerified"),
                        }}
                        error={!!errors["emailVerified"]}
                        helperText={errors["emailVerified"]}
                        type={fieldTypes["emailVerified"]}
                      />
                    </Grid>

                    <Grid item xs={12} sm={4}>
                      <TextField
                        id={"phoneNumber"}
                        label={"Phone"}
                        value={formData["phoneNumber"]}
                        onChange={handleChange}
                        variant="filled"
                        inputProps={{
                          readOnly: readonlyFields.includes("phoneNumber"),
                        }}
                        required
                        error={!!errors["phoneNumber"]}
                        helperText={errors["phoneNumber"]}
                        type={fieldTypes["phoneNumber"]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        id={"address"}
                        label={"Address"}
                        value={formData["address"]}
                        onChange={handleChange}
                        variant="filled"
                        inputProps={{
                          readOnly: readonlyFields.includes("address"),
                        }}
                        required
                        error={!!errors["address"]}
                        helperText={errors["address"]}
                        type={fieldTypes["address"]}
                      />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                      <TextField
                        id={"role"}
                        label={"Role"}
                        value={formData["role"]}
                        onChange={handleChange}
                        variant="filled"
                        inputProps={{
                          readOnly: readonlyFields.includes("role"),
                        }}
                        required
                        error={!!errors["role"]}
                        helperText={errors["role"]}
                        type={fieldTypes["role"]}
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

export default EditUser;
