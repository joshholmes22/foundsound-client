import AccountTypeContainer from "../../containers/AccountTypeContainers";
import SignupForm from "../../components/SignupForm";
import { useState } from "react";

import "./Signup.css";

const Signup = () => {
  const [accountType, setAccountType] = useState("AudienceMember");

  return (
    <div className="signupPageContainer">
      <div className="signupContainer">
        <div className="accountCardContainer">
          <AccountTypeContainer setAccountType={setAccountType} />
        </div>
        <div className="signupForm">
          <SignupForm accountType={accountType} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
