import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import List from "../components/List";
import Container from "../components/Container";
import MyButton from "../components/MyButton";

function UserList() {
  const navigate = useNavigate();

  return (
    <>
      <Container>
        <MyButton onClick={() => navigate("/addUser")}>Add New User</MyButton>
        <List></List>
      </Container>
    </>
  );
}

export default UserList;
