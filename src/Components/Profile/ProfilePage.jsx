import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const [user, setUser] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`/api/user/${userId}`);
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, [userId]);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Profile</h1>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
      <p>Phone Number: {user.phoneNumber}</p>
      <p>Address: {user.address}</p>
      <p>Number of Children: {user.numChildren}</p>
      <p>Home Type: {user.homeType}</p>
      <p>Current Pets: {user.currentPets}</p>
    </div>
  );
}

export default ProfilePage;