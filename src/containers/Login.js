import Link from "@mui/material/Link";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <div>
        <Link href="/signup">Click here to sign up</Link>
      </div>
      <div>
        <Link href="/">Click here to go home</Link>
      </div>
    </div>
  );
};

export default Login;
