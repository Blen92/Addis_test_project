import React, { useEffect } from "react";
import { ThemeProvider } from "theme-ui";
import Container from "../components/Container";
import { theme } from "../theme";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Box, Text, Flex, Heading } from "rebass";
import EditIcon from "@mui/icons-material/Edit";
import Logo from "../components/Logo";
import { getOneUserStart } from "../redux/userAction";

function UserInfo() {
  const singleUser = useSelector((state) => state.users.user);
  const loading = useSelector((state) => state.users.loading);

  const dispatch = useDispatch();

  const { id } = useParams();

  const { firstName, lastName, age, gender, height } = singleUser;

  useEffect(() => {
    dispatch(getOneUserStart(id));
  }, []);

  return (
    <>
      {loading === true ? (
        <h1>loading...</h1>
      ) : (
        <Container>
          <Logo />
          <ThemeProvider them={theme}>
            <Flex justifyContent="center">
              <Heading mt={1} color="white" fontFamily="Lato, sans-serif">
                User Details
              </Heading>
              <Link to={`/editUser/${id}`}>
                <Text mt={1} pl={3} fontSize={[2, 3]} color="#55acee">
                  <EditIcon />
                </Text>
              </Link>
            </Flex>
            <Box
              py={4}
              px={[4, 5, 6]}
              fontSize={[2, 3]}
              color="white"
              fontFamily="Lato, sans-serif"
            >
              <Flex>
                <Text p={[1, 2]} width={1 / 2}>
                  First Name:
                </Text>
                <Text p={[1, 2]} width={1 / 2}>
                  {firstName}
                </Text>
              </Flex>
              <Flex>
                <Text p={[1, 2]} width={1 / 2}>
                  Last Name:
                </Text>
                <Text p={[1, 2]} width={1 / 2}>
                  {lastName}
                </Text>
              </Flex>
              <Flex>
                <Text p={[1, 2]} width={1 / 2}>
                  Age:
                </Text>
                <Text p={[1, 2]} width={1 / 2}>
                  {age}
                </Text>
              </Flex>
              <Flex>
                <Text p={[1, 2]} width={1 / 2}>
                  Gender:
                </Text>
                <Text p={[1, 2]} width={1 / 2}>
                  {gender}
                </Text>
              </Flex>
              <Flex>
                <Text p={[1, 2]} width={1 / 2}>
                  Height:
                </Text>
                <Text p={[1, 2]} width={1 / 2}>
                  {height}
                </Text>
              </Flex>
            </Box>
          </ThemeProvider>
        </Container>
      )}
    </>
  );
}

export default UserInfo;
