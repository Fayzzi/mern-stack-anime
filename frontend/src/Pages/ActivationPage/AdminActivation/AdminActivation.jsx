import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function AdminActivation() {
  const { admin_activation } = useParams();
  const [error, seterror] = useState(false);
  const [activated, setActivated] = useState(false);
  useEffect(() => {
    const activateadmin = async () => {
      axios
        .post("/api/v2/admin/activation", {
          admin_activation,
        })
        .then(() => {
          setActivated(true);
        })
        .catch((err) => {
          seterror(true);
        });
    };

    if (admin_activation && !activated && !error) {
      activateadmin(); // Call the activation function here
    }
  }, [admin_activation, activated, error]);
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
        <p>Activating your account!!</p>
      )}
    </div>
  );
}
