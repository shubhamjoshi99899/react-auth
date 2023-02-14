import { Avatar, Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    let name = localStorage.getItem("name");
    setName(name);
  }, []);
  return (
    <>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        flexDirection={"column"}
      >
        <Avatar
          src="/ic_user.svg"
          sx={{
            width: "50px",
            height: "50px",
            background: "#EFEFEF 0% 0% no-repeat padding-box",
            p: 4,
            mb: 2,
          }}
        />
        <Typography
          sx={{
            fontSize: "30px",
            fontWeight: 700,
            color: "#0B3558",
          }}
        >
          Welcome {name}
        </Typography>
        <Typography
          sx={{
            fontSize: "1rem",
            fontWeight: 600,
            color: "#0B3558",
            mb: 2,
          }}
          textAlign={"center"}
        >
          Lets connect to your workplace. <br />
          Please enter your credentials to conitnue
        </Typography>
      </Box>
    </>
  );
};

export default Dashboard;
