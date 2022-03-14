import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { theme } from "../theme";
import { ThemeProvider } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUserStart, getUsersStart } from "../redux/userAction";
import { Text, Heading, Image, Flex } from "rebass";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const List = (props) => {
  const male = require("../assets/male.jpg");
  const female = require("../assets/female.jpg");
  let avator = "";

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const users = useSelector((state) => state.users.users);

  useEffect(() => {
    dispatch(getUsersStart());
  });

  const handelDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      dispatch(deleteUserStart(id));
    }
  };
  return (
    <>
      {users &&
        users.map((user) => {
          const { id, firstName, lastName, gender } = user;
          {
            gender === "Female" ? (avator = female) : (avator = male);
          }
          return (
            <div key={id}>
              <ThemeProvider theme={theme}>
                <Flex
                  justifyContent="space-between"
                  alignItems="center"
                  bg="#4b4b4b"
                  sx={{
                    borderRadius: "12px",
                    boxShadow: "10px 20px 28px rgba(0, 0, 0, 0.3)",
                    padding: "0.5rem 1rem",
                    margin: "1.5rem 0",
                  }}
                >
                  <Image
                    src={avator}
                    onClick={() => navigate(`/user/${id}`)}
                    sx={{
                      cursor: "pointer",
                      width: 60,
                      height: 60,
                      borderRadius: 9999,
                    }}
                  />

                  <Flex
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="space-between"
                    flex="1"
                  >
                    <Heading
                      fontSize={[2, 3]}
                      color="white"
                      onClick={() => navigate(`/user/${id}`)}
                      sx={{
                        cursor: "pointer",
                        margin: "0 0 0 1.2rem",
                        fontFamily: "Lato, sans-serif",
                      }}
                    >
                      {firstName} {lastName}
                    </Heading>
                    <Flex>
                      <Text
                        onClick={() => handelDelete(id)}
                        sx={{ cursor: "pointer" }}
                        fontSize={[2, 3]}
                        color="#dd4b39"
                      >
                        <DeleteIcon />
                      </Text>
                      <Link to={`/editUser/${id}`}>
                        <Text ml={3} fontSize={[2, 3]} color="#55acee">
                          <EditIcon />
                        </Text>
                      </Link>
                    </Flex>
                  </Flex>
                </Flex>
              </ThemeProvider>
            </div>
          );
        })}
    </>
  );
};

export default List;
