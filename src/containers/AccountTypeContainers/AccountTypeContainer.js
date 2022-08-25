import "./AccountTypeContianer.css";
import AccountTypeCard from "../../components/AccountTypeCard/AccountTypeCard";

const AccountTypeContainer = ({ setAccountType }) => {
  const handleChange = () => {
    console.log("");
  };

  const accountClicked = ({ accountType }) => {
    console.log(accountType);
  };

  return (
    <div className="typeContianer">
      <div onClick={() => accountClicked({ accountType: "audienceMember" })}>
        <AccountTypeCard
          imageUrl={
            "https://images.unsplash.com/photo-1573055418049-c8e0b7e3403b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
          }
          altText={"Festival"}
          overlayText={"Audience Member"}
          value="audienceMember"
          onChange={handleChange}
        />
      </div>
      <AccountTypeCard
        imageUrl={
          "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        }
        altText={"Performer"}
        overlayText={"Artist"}
        value="artist"
        onChange={handleChange}
      />
      <AccountTypeCard
        imageUrl={
          "https://images.unsplash.com/photo-1527853359084-088460b3000d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1038&q=80"
        }
        altText={"Backstage"}
        overlayText={"Event Organiser"}
        value="eventOrganiser"
        onChange={handleChange}
      />
    </div>
  );
};

export default AccountTypeContainer;
