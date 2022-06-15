import React from "react";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: "#2c4250",
        color: "white",
        minHeight: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <a href="#" style={{ color: "blue"}}>
        Privacy Policy
      </a>{" "}
      &nbsp;|&nbsp;&#169; 2022 Highradius. All Rights Reserved.
    </div>
  );
}
