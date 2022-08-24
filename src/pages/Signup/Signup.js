import AccountTypeContainer from "../../containers/AccountTypeContainers";
import SignupForm from "../../components/SignupForm";

import "./Signup.css";

const Signup = () => {
  return (
    <div className="signupPageContainer">
      <div className="signupContainer">
        <div className="accountCardContainer">
          <AccountTypeContainer />
        </div>
        <div className="signupForm">
          <SignupForm />
        </div>
      </div>
    </div>
  );
};

export default Signup;
