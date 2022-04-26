import React, { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Flex, Heading } from "rebass";
import { Label, Input, Select } from "@rebass/forms";
import { ThemeProvider } from "@emotion/react";
import Container from "../components/Container";
import MyButton from "../components/MyButton";
import { theme } from "../theme";
import { getOneUserStart, updateUserStart } from "../redux/userAction";
import Logo from "../components/Logo";

function EditUser() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  console.log("start renering");
  const singleUser = useSelector((state) => state.users.user);
  const loading = useSelector((state) => state.users.loading);

  const { firstName, lastName, age, gender, height } = singleUser;

  //const [formValue, setFormValue] = useState({});
  //formValue = singleUser;
  // if (Object.keys(formValue).length !== 0) {
  //   const [formValue, setFormValue] = useState(singleUser);
  // }
  const oneSetter = useRef({});
  console.log("previous", singleUser);

  const { id } = useParams();

  useEffect(() => {
    console.log("use");
    dispatch(getOneUserStart(id));
  }, []);
  const setter = () => {
    oneSetter.current = singleUser;
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
                    defaultValue={firstName}
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
                  <Label
                    htmlFor="lastName"
                    m={3}
                    fontSize={[2, 3]}
                    color="white"
                  >
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Enter your last name"
                    autoComplete="off"
                    defaultValue={lastName}
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
                    defaultValue={age}
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
                    defaultValue={height}
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
                      defaultValue="Male"
                      selected={gender === "Male" ? "true" : "false"}
                    >
                      Male
                    </option>
                    <option
                      defaultValue="Female"
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
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formValue = oneSetter.current;
    dispatch(updateUserStart({ id, formValue }));

    console.log("submit", formValue);
    setTimeout(navigate("/"), 500);
  };

  const onInputChange = (prop) => (e) => {
    oneSetter.current = { ...oneSetter.current, [prop]: e.target.value };
  };
  console.log("return lay eresku");
  return (
    <>
      {
        loading === true ? (
          <h1>loading...</h1>
        ) : singleUser == {} ? (
          <>
            <h1>loading...</h1>
          </>
        ) : (
          <>{setter()}</>
        )

        // <Container>
        //   <Logo />
        //   <ThemeProvider theme={theme}>
        //     <Box
        //       as="form"
        //       onSubmit={handleSubmit}
        //       py={3}
        //       sx={{ margin: "auto", fontFamily: "Lato, sans-serif" }}
        //     >
        //       <Heading
        //         color="white"
        //         fontFamily="Lato, sans-serif"
        //         mt="-10px"
        //         mb="10px"
        //       >
        //         Update User Details
        //       </Heading>
        //       <Flex m={2} p={3} flexWrap="wrap" alignItems="center">
        //         <Box px={2}>
        //           <Label
        //             htmlFor="firstName"
        //             m={3}
        //             fontSize={[2, 3]}
        //             color="white"
        //           >
        //             First Name
        //           </Label>
        //           <Input
        //             id="firstName"
        //             name="firstName"
        //             type="text"
        //             placeholder="Enter your first name"
        //             autoComplete="off"
        //             defaultValue={firstName}
        //             required
        //             onChange={onInputChange("firstName")}
        //             sx={{
        //               padding: "0.8rem",
        //               borderRadius: "10px",
        //               border: "1px solid #ccc",
        //               backgroundColor: "#ccc",
        //               width: "20rem",
        //               margin: "0.5rem",
        //               maxWidth: "100%",
        //             }}
        //           />
        //         </Box>
        //         <Box px={2}>
        //           <Label
        //             htmlFor="lastName"
        //             m={3}
        //             fontSize={[2, 3]}
        //             color="white"
        //           >
        //             Last Name
        //           </Label>
        //           <Input
        //             id="lastName"
        //             name="lastName"
        //             placeholder="Enter your last name"
        //             autoComplete="off"
        //             defaultValue={lastName}
        //             required
        //             onChange={onInputChange("lastName")}
        //             sx={{
        //               padding: "0.8rem",
        //               borderRadius: "10px",
        //               border: "1px solid #ccc",
        //               backgroundColor: "#ccc",
        //               width: "20rem",
        //               margin: "0.5rem",
        //               maxWidth: "100%",
        //             }}
        //           />
        //         </Box>
        //         <Box px={2}>
        //           <Label htmlFor="age" m={3} fontSize={[2, 3]} color="white">
        //             Age
        //           </Label>
        //           <Input
        //             id="age"
        //             name="age"
        //             placeholder="Enter your age"
        //             autoComplete="off"
        //             defaultValue={age}
        //             required
        //             onChange={onInputChange("age")}
        //             sx={{
        //               padding: "0.8rem",
        //               borderRadius: "10px",
        //               border: "1px solid #ccc",
        //               backgroundColor: "#ccc",
        //               width: "20rem",
        //               margin: "0.5rem",
        //               maxWidth: "100%",
        //             }}
        //           />
        //         </Box>
        //         <Box px={2}>
        //           <Label htmlFor="height" m={3} fontSize={[2, 3]} color="white">
        //             Height
        //           </Label>
        //           <Input
        //             id="height"
        //             name="height"
        //             placeholder="Enter your height in meter"
        //             autoComplete="off"
        //             defaultValue={height}
        //             required
        //             onChange={onInputChange("height")}
        //             sx={{
        //               padding: "0.8rem",
        //               borderRadius: "10px",
        //               border: "1px solid #ccc",
        //               backgroundColor: "#ccc",
        //               width: "20rem",
        //               margin: "0.5rem",
        //               maxWidth: "100%",
        //             }}
        //           />
        //         </Box>
        //         <Box px={2}>
        //           <Label htmlFor="gender" m={3} fontSize={[2, 3]} color="white">
        //             Gender
        //           </Label>
        //           <Select
        //             id="gender"
        //             name="gender"
        //             required
        //             onChange={onInputChange("gender")}
        //             sx={{
        //               padding: "0.8rem",
        //               borderRadius: "10px",
        //               border: "1px solid #ccc",
        //               backgroundColor: "#ccc",
        //               width: "20rem",
        //               margin: "0 0.5rem",
        //               maxWidth: "100%",
        //             }}
        //           >
        //             <option
        //               defaultValue="Male"
        //               selected={gender === "Male" ? "true" : "false"}
        //             >
        //               Male
        //             </option>
        //             <option
        //               defaultValue="Female"
        //               selected={gender === "Female" ? "true" : "false"}
        //             >
        //               Female
        //             </option>
        //           </Select>
        //         </Box>
        //       </Flex>

        //       <MyButton>Save update</MyButton>
        //     </Box>
        //   </ThemeProvider>
        // </Container>
      }
    </>
  );
}

export default EditUser;
