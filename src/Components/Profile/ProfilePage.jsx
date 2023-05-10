import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfilePage = ({ user }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        console.log("Fetching user data...");
        const userId = user?.userId || localStorage.getItem("userId");
        if (!userId) {
          console.log("User ID not found");
          return;
        }
        const response = await axios.get(`/api/user/${userId}`);
        const userData = response.data;
        console.log("User:", userData);
        setUserData(userData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, [user]);

  return (
    <div>
      {userData ? (
        <div>
          <h2>{userData.firstName}'s Profile</h2>
          {/* Render the user data */}
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default ProfilePage;
