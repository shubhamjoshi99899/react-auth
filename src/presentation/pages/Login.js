import {
  Alert,
  Avatar,
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [severity, setSeverity] = useState("");
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (event) => {
    // name = event.target.name;
    // value = event.target.value;
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://auth-1lbr.onrender.com/api/login", values)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("name", res.data.first_name);
        setOpen(true);
        setSeverity("success");
        setMessage("Logged in successfully");
        navigate("/dashboard");
      })
      .catch((err) => {
        setOpen(true);
        setMessage(err.response.data.errors.message);
        setSeverity("error");
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    let authorized = localStorage.getItem("token");
    if (authorized) {
      navigate("/dashboard");
    }
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
        <form onSubmit={(event) => handleSubmit(event)}>
          <Box display={"flex"} flexDirection={"column"}>
            <InputLabel htmlFor="Password">Email</InputLabel>

            <TextField
              placeholder="Email Address"
              variant="outlined"
              size="medium"
              sx={{ mb: 2, width: "100%" }}
              value={values.email}
              name={"email"}
              onChange={(event) => handleChange(event)}
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
              onChange={(event) => handleChange(event)}
              placeholder="Enter password"
              value={values.password}
              name="password"
              sx={{ mb: 2 }}
            />
            <Button
              sx={{
                background: "#0B3558",
                textTransform: "capitalize",
                fontSize: "18px",
              }}
              variant="contained"
              type="submit"
              size="large"
            >
              Sign in
            </Button>
          </Box>
        </form>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={severity}
            sx={{ width: "100%" }}
          >
            {message}
          </Alert>
        </Snackbar>
      </Box>
    </>
  );
};

export default Login;
