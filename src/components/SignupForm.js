import { useState } from "react";
import { useForm } from "react-hook-form";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Link from "@mui/material/Link";
import FormHelperText from "@mui/material/FormHelperText";
import Grid from "@mui/material/Grid";

const SignupForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setError,
    getValues,
  } = useForm({
    mode: "onBlur",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmedPassword, setShowConfirmedPassword] = useState(false);

  const onSubmit = (formData) => {
    if (formData.password !== formData.confirmPassword) {
      setError("confirmPassword", {
        type: "manual",
        message: "Passwords do not match.",
      });
    }
    console.log(formData);
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowConfirmedPassword = () => {
    setShowConfirmedPassword(!showConfirmedPassword);
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
      <Grid item xs={6}>
        <TextField
          required
          error={!!errors.firstName}
          label="First name"
          variant="outlined"
          helperText={!!errors.firstName ? "Please enter your first name." : ""}
          {...register("firstName", {
            required: true,
          })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          error={!!errors.lastName}
          label="Last name"
          variant="outlined"
          helperText={!!errors.lastName ? "Please enter your last name." : ""}
          {...register("lastName", {
            required: true,
          })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          error={!!errors.phoneNumber}
          label="Phone Number"
          variant="outlined"
          helperText={
            !!errors.phoneNumber ? "Please enter your phone number." : ""
          }
          {...register("phoneNumber", {
            required: true,
          })}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          required
          error={!!errors.imageUrl}
          label="Image URL"
          variant="outlined"
          helperText={!!errors.imageUrl ? "Please enter your image URL." : ""}
          {...register("imageUrl", {
            required: true,
          })}
        />
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
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
          {!!errors.password && (
            <FormHelperText
              error={!!errors.password}
              id="outlined-weight-helper-text"
            >
              Please enter a valid password.
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl sx={{ m: 1 }} variant="outlined">
          <InputLabel
            error={!!errors.confirmPassword}
            htmlFor="outlined-adornment-password"
          >
            Confirm Password
          </InputLabel>
          <OutlinedInput
            error={!!errors.confirmPassword}
            id="outlined-adornment-confirm-password"
            type={showConfirmedPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={toggleShowConfirmedPassword}
                  onMouseDown={toggleShowConfirmedPassword}
                  edge="end"
                >
                  {showConfirmedPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
            {...register("confirmPassword", {
              required: true,
              validate: (value) => getValues("password") === value,
            })}
          />
          {errors.confirmPassword && (
            <FormHelperText
              error={!!errors.confirmPassword}
              id="outlined-weight-helper-text"
            >
              {errors.confirmPassword?.message || "Passwords do not match."}
            </FormHelperText>
          )}
        </FormControl>
      </Grid>
      <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
        <Button variant="contained" type="submit">
          Sign Up
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="caption" component="div" align="center">
          Already have an account? <Link href="/login">Login</Link>
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="caption"
          component="div"
          sx={{ color: "red" }}
          align="center"
        >
          Failed to login. Please try again.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default SignupForm;
