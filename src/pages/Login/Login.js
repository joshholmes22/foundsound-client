import LoginForm from "../../components/LoginForm";
import AccountTypeContainer from "../../containers/AccountTypeContainers";
import SignupForm from "../../components/SignupForm";
import Grid from "@mui/material/Grid";
import ImageWithBackground from "../../components/ImageWithBackground";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Typography } from "@mui/material";
import { useState } from "react";

import "./Login.css";

const Login = ({ isMobile }) => {
  const [accountType, setAccountType] = useState("audienceMember");
  return (
    <Grid container sx={{ minHeight: "100vh" }}>
      {!isMobile && (
        <Grid item md={6}>
          <ImageWithBackground imageUrl="https://images.unsplash.com/photo-1617174512292-aadc4a85151c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
        </Grid>
      )}
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: `linear-gradient(
            to top,
            rgba(20, 20, 20, 0.2),
            rgba(133, 133, 133, 0.2)
          )`,
        }}
      >
        <Typography
          variant="h3"
          gutterBottom
          sx={{ fontSize: "30px", fontWeight: "600", marginTop: 2 }}
        >
          Login
        </Typography>
        <LoginForm isMobile={isMobile} accountType={accountType} />
      </Grid>
    </Grid>
  );
};

export default Login;

// <div className="loginPageContainer">
//   <div className="signupContainer">
//     {/* <div className="accountCardContainer">
//       <AccountTypeContainer
//         setAccountType={setAccountType}
//         accountType={accountType}
//       />
//     </div> */}
//     <div className="signupForm">
//       <LoginForm accountType={accountType} />
//     </div>
//   </div>
// </div>
