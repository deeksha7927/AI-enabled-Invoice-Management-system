import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import logo from "../assets/images/logo.svg";
import companyLogo from "../assets/images/companyLogo.svg";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: "#2c4250" }}>
        <Toolbar>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={companyLogo} />
            <Typography variant="h4">ABC Products</Typography>
          </div>
          <div style={{ marginLeft: "20%" }}>
            <img src={logo} />
          </div>
        </Toolbar>
        <div style={{marginLeft: "-1200px", fontWeight: 500, fontSize: "20px"}}>Invoice List</div>
      </AppBar>
    </Box>
  );
}
