import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { Box } from "rebass";
import HomeIcon from "@mui/icons-material/Home";

const Logo = () => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate("/")}
      sx={{
        position: "absolute",
        color: "#3957ED",
        boxShadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
        padding: "0.5rem 1rem",
        borderRadius: "12px",
        cursor: "pointer",
        "@media screen and (max-width: 40em)": {
          padding: "0.1rem 0.2rem",
        },
      }}
    >
      <HomeIcon fontSize="large">logo</HomeIcon>
    </Box>
  );
};

export default Logo;
