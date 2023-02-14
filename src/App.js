import "./App.css";
import {
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

function App() {
  const [showPassword, setShowPassword] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
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
          Welcome
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
        <Box display={"flex"} flexDirection={"column"}>
          <InputLabel htmlFor="Password">Email</InputLabel>

          <TextField
            id="outlined-basic"
            placeholder="Email Address"
            variant="outlined"
            size="medium"
            sx={{ mb: 2, width: "100%" }}
            value={values.email}
          />
          <InputLabel htmlFor="Password">Password</InputLabel>
          <OutlinedInput
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            placeholder="Enter password"
            value={values.password}
            sx={{ mb: 2 }}
          />
          <Button
            sx={{
              background: "#0B3558",
              textTransform: "capitalize",
              fontSize: "18px",
            }}
            variant="contained"
            size="large"
          >
            Sign in
          </Button>
        </Box>
      </Box>
    </>
  );
}

export default App;
