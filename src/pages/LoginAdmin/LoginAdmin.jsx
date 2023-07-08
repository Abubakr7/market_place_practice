// import React from "react";
// import "../../pages/LoginAdmin/LoginAdmin.css";
// import { Link } from "react-router-dom";

// const LoginAdmin = () => {
//   return (
//     <div className="Admin w-[100%] h-[100vh] flex justify-center items-center">
//       <div className="w-[30%] m-auto h-[50vh] bg-white rounded-xl p-3 pt-5">
//         <p className="text-2xl font-bold">Войти или создать профиль</p>
//         <form className="w-[100%]" action="">
//           <div className=" flex flex-col items-center justify-center h-[10%] mt-5">
//             <p className="text-center">Введите номер телефона или логин </p>

//             <input type="text" className="border border-violet-600 w-[80%] rounded-2xl " />

//             <p className="text-center">Введите Пароль или код в смс </p>
//             <input type="password" className="border border-violet-600 w-[80%] rounded-2xl text-xl" />
//             <Link className="w-[80%] text-center" to={"/Panel"}>
//             <button className="w-[80%] bg-violet-700 text-white h-[8vh] rounded-xl mt-5 m-auto ">
//               Войти
//             </button>
//             </Link>
//           </div>
//         </form>

//       </div>
//     </div>
//   );
// };

// export default LoginAdmin;
import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../Layout2/components/Copyright";
import { saveToken } from "../../utils/token";
import { useNavigate } from "react-router-dom";

const defaultTheme = createTheme();

export default function Login() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = React.useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    let user = {
      email: event.target["email"].value,
      password: event.target["password"].value,
    };

    try {
      const response = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const data = await response.json();

      if (response.status >= 400) {
        setErrorMessage(data);
        return;
      }
      saveToken(data.accessToken, event.target["remember"].checked);
      navigate("/panel");
    } catch (e) {}
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:
              "url(https://source.unsplash.com/random?wallpapers)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
            <Box
              component="form"
              // noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={
                  <Checkbox value="remember" name="remember" color="primary" />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              {errorMessage && (
                <div
                  style={{ color: "red", textAlign: "center", fontSize: 20 }}
                >
                  {errorMessage}
                </div>
              )}
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
