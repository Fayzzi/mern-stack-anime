import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserActivation() {
  const { token } = useParams();
  const [error, setError] = useState(false);
  const [activated, setActivated] = useState(false);

  useEffect(() => {
    const activateEmail = async () => {
      try {
        const res = await axios.post(`/api/v2/user/activation`, {
          activation_token: token,
        });
        console.log(res.data.message);
        setActivated(true);
      } catch (error) {
        console.log(error.response.data.message);
        setError(true);
      }
    };

    if (token && !activated && !error) {
      activateEmail(); // Call the activation function here
    }
  }, [token, activated, error]);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {error ? (
        <p>Your Token is expired!</p>
      ) : activated ? (
        <p>Your Account has been Activated Successfully!!</p>
      ) : (
        <p>Activating your account...</p>
      )}
    </div>
  );
}
