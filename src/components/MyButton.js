import React from "react";
import { Button } from "rebass";

const MyButton = (props) => {
  return (
    <Button
      {...props}
      fontSize={[1, 2]}
      sx={{
        backgroundImage: "linear-gradient(45deg, #40005d, #3957ED)",
        boxShadow: "0 1px 8px rgba(0, 0, 0, 0.25)",
        padding: "1rem 2rem",
        borderRadius: "12px",
        cursor: "pointer",

        ":hover": {
          backgroundImage: "linear-gradient(to right, #40445d, #3900ED)",
        },
      }}
    ></Button>
  );
};

export default MyButton;
