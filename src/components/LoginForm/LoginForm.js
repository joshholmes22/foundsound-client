import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import LoadingButton from "@mui/lab/LoadingButton";

import { useMutation } from "@apollo/client";
import { LOGIN } from "../../graphql/mutations";
import { useAuth } from "../../context/AppProvider";

const LoginForm = () => {
  const [login, { data, error }] = useMutation(LOGIN);
  const navigate = useNavigate();
  const { setIsLoggedIn, setUser } = useAuth();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onBlur",
  });
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (formData) => {
    login({
      variables: {
        loginInput: {
          email: formData.email,
          password: formData.password,
        },
      },
    });
  };

  useEffect(() => {
    if (data?.login?.success) {
      const { token, user } = data.login;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      setUser(user);
      setIsLoggedIn(true);

      navigate("/dashboard", { replace: true });
    }
  }, [data, navigate, setUser, setIsLoggedIn]);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Grid
      container
      component="form"
      sx={{
        p: 3,
        width: "50%",
      }}
      spacing={4}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid item xs={6} sx={{ display: "flex", justifyContent: "center" }}>
        <TextField
          required
          error={!!errors.email}
          label="Email"
          variant="outlined"
          helperText={!!errors.email ? "Please enter a valid email." : ""}
          {...register("email", {
            required: true,
          })}
        />
      </Grid>
      <Grid item xs={6}>
        <FormControl sx={{ m: 1 }} variant="outlined">
          <InputLabel
            error={!!errors.password}
            htmlFor="outlined-adornment-password"
          >
            Password
          </InputLabel>
          <OutlinedInput
            error={!!errors.password}
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowPassword}
                  onMouseDown={toggleShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            {...register("password", {
              required: true,
            })}
          />
        </FormControl>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <LoadingButton variant="contained" type="submit">
          Login
        </LoadingButton>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption" component="div" align="center">
          Need an account? <Link href="/signup">Sign Up</Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        {error && (
          <Typography
            variant="caption"
            component="div"
            sx={{ color: "red" }}
            align="center"
          >
            Failed to login. Please try again.
          </Typography>
        )}
      </Grid>
    </Grid>
  );
};

export default LoginForm;
