import { Box } from "rebass";

const Container = (props) => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(31, 31, 31)",
        borderRadius: "12px",
        boxShadow: "10px 20px 28px rgba(0, 0, 0, 0.3)",
      }}
      p={3}
      width="50rem"
      maxWidth="95%"
      m="2rem auto"
      {...props}
    ></Box>
  );
};

export default Container;
