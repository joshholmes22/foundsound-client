import AccountTypeContainer from "../../containers/AccountTypeContainers";
import LoginForm from "../../components/LoginForm";
import { useState } from "react";

import "./Login.css";

const Login = () => {
  const [accountType, setAccountType] = useState("audienceMember");
  return (
    <div className="loginPageContainer">
      <div className="signupContainer">
        <div className="accountCardContainer">
          <AccountTypeContainer
            setAccountType={setAccountType}
            accountType={accountType}
          />
        </div>
        <div className="signupForm">
          <LoginForm accountType={accountType} />
        </div>
      </div>
    </div>
  );
};

export default Login;
