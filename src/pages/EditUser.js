import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Flex, Heading } from "rebass";
import { Label, Input, Select } from "@rebass/forms";
import { ThemeProvider } from "@emotion/react";
import Container from "../components/Container";
import MyButton from "../components/MyButton";
import { theme } from "../theme";
import { updateUserStart } from "../redux/userAction";
import Logo from "../components/Logo";

function EditUser() {
  const navigate = useNavigate();
  const initialState = {
    firstName: "",
    lastName: "",
    age: "",
    gender: "",
    height: "",
  };
  const [formValue, setFormValue] = useState(initialState);
  const { firstName, lastName, age, gender, height } = formValue;

  const dispatch = useDispatch();

  const users = useSelector((state) => state.users.users);

  const { id } = useParams();

  useEffect(() => {
    if (id) {
      const singleUser = users.find((item) => item.id === Number(id));
      setFormValue({ ...singleUser });
    }
  }, [id]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && age && gender && height) {
      dispatch(updateUserStart({ id, formValue }));
      setTimeout(navigate("/"), 500);
    }
  };

  const onInputChange = (prop) => (e) => {
    setFormValue({ ...formValue, [prop]: e.target.value });
  };

  return (
    <>
      <Container>
        <Logo />
        <ThemeProvider theme={theme}>
          <Box
            as="form"
            onSubmit={handleSubmit}
            py={3}
            sx={{ margin: "auto", fontFamily: "Lato, sans-serif" }}
          >
            <Heading
              color="white"
              fontFamily="Lato, sans-serif"
              mt="-10px"
              mb="10px"
            >
              Update User Details
            </Heading>
            <Flex m={2} p={3} flexWrap="wrap" alignItems="center">
              <Box px={2}>
                <Label
                  htmlFor="firstName"
                  m={3}
                  fontSize={[2, 3]}
                  color="white"
                >
                  First Name
                </Label>
                <Input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your first name"
                  autoComplete="off"
                  value={firstName || ""}
                  required
                  onChange={onInputChange("firstName")}
                  sx={{
                    padding: "0.8rem",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    backgroundColor: "#ccc",
                    width: "20rem",
                    margin: "0.5rem",
                    maxWidth: "100%",
                  }}
                />
              </Box>
              <Box px={2}>
                <Label htmlFor="lastName" m={3} fontSize={[2, 3]} color="white">
                  Last Name
                </Label>
                <Input
                  id="lastName"
                  name="lastName"
                  placeholder="Enter your last name"
                  autoComplete="off"
                  value={lastName || ""}
                  required
                  onChange={onInputChange("lastName")}
                  sx={{
                    padding: "0.8rem",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    backgroundColor: "#ccc",
                    width: "20rem",
                    margin: "0.5rem",
                    maxWidth: "100%",
                  }}
                />
              </Box>
              <Box px={2}>
                <Label htmlFor="age" m={3} fontSize={[2, 3]} color="white">
                  Age
                </Label>
                <Input
                  id="age"
                  name="age"
                  placeholder="Enter your age"
                  autoComplete="off"
                  value={age || ""}
                  required
                  onChange={onInputChange("age")}
                  sx={{
                    padding: "0.8rem",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    backgroundColor: "#ccc",
                    width: "20rem",
                    margin: "0.5rem",
                    maxWidth: "100%",
                  }}
                />
              </Box>
              <Box px={2}>
                <Label htmlFor="height" m={3} fontSize={[2, 3]} color="white">
                  Height
                </Label>
                <Input
                  id="height"
                  name="height"
                  placeholder="Enter your height in meter"
                  autoComplete="off"
                  value={height || ""}
                  required
                  onChange={onInputChange("height")}
                  sx={{
                    padding: "0.8rem",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    backgroundColor: "#ccc",
                    width: "20rem",
                    margin: "0.5rem",
                    maxWidth: "100%",
                  }}
                />
              </Box>
              <Box px={2}>
                <Label htmlFor="gender" m={3} fontSize={[2, 3]} color="white">
                  Gender
                </Label>
                <Select
                  id="gender"
                  name="gender"
                  required
                  onChange={onInputChange("gender")}
                  sx={{
                    padding: "0.8rem",
                    borderRadius: "10px",
                    border: "1px solid #ccc",
                    backgroundColor: "#ccc",
                    width: "20rem",
                    margin: "0 0.5rem",
                    maxWidth: "100%",
                  }}
                >
                  <option
                    value="Male"
                    selected={gender === "Male" ? "true" : "false"}
                  >
                    Male
                  </option>
                  <option
                    value="Female"
                    selected={gender === "Female" ? "true" : "false"}
                  >
                    Female
                  </option>
                </Select>
              </Box>
            </Flex>

            <MyButton>Save update</MyButton>
          </Box>
        </ThemeProvider>
      </Container>
    </>
  );
}

export default EditUser;
