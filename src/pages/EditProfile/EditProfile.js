import { useAuth } from "../../context/AppProvider";
import "./EditProfile.css";

const EditProfile = () => {
  const { user } = useAuth();

  console.log(user);

  return (
    <div>
      <h1>Edit Profile</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Social Media: {user.socialMedia}</p>
      <img src={user.imageUrl} alt="User profile" className="profileImage" />
    </div>
  );
};

export default EditProfile;
