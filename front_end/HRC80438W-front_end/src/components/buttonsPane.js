import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { IoReloadOutline } from "react-icons/io5";
import TextField from "@mui/material/TextField";
import "../assets/css/button.css";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import OutlinedInput from "@mui/material/OutlinedInput";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#2c3d4d",
  color: "#fff",
  boxShadow: 24,
  p: 4,
};

export default function ButtonsPane() {
  const [open, setOpen] = React.useState(false);
  const [openEdit, setOpenEdit] = React.useState(false);
  const [openDelete, setOpenDelete] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenEdit = () => setOpenEdit(true);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleClose = () => setOpen(false);
  const handleCloseEdit = () => setOpenEdit(false);
  const handleCloseDelete = () => setOpenDelete(false);
  return (
    <Grid container spacing={2}>
      <Grid container spacing={1} xs={7}>
        <Grid item xs={8}>
          <ButtonGroup
            className="buttongroup"
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button
              className="button"
              variant="outlined"
              style={{
                color: "white",
                fontWeight: 500,
                backgroundColor: "#15aef2",
              }}
            >
              PREDICT
            </Button>
            <Button
              className="button"
              variant="outlined"
              style={{ color: "white", fontWeight: 500 }}
            >
              ANALYTICS VIEW
            </Button>
            <Button
              className="button"
              variant="outlined"
              style={{ color: "white", fontWeight: 500 }}
            >
              ADVANCE SEARCH
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid item xs={1} style={{ marginLeft: "-10px", marginRight: "10px" }}>
          <Button variant="outlined">
            <IoReloadOutline size={25} />
          </Button>
        </Grid>
        <Grid item xs={3}>
          <TextField
            fullWidth
            size="small"
            style={{ backgroundColor: "white", borderRadius: "8px" }}
            label="Search Customer Id"
            InputProps={{
              type: "search",
            }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={1} xs={5}>
        <Grid item xs={4}>
          <Button
            className="button"
            style={{ color: "white", fontWeight: 500 }}
            variant="outlined"
            onClick={handleOpen}
          >
            ADD
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography variant="h6" style={{ marginBottom: "10px" }}>
                Add
              </Typography>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="text"
                    name="business_code"
                    placeholder="Business Code"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="text"
                    name="cust_number"
                    placeholder="Customer Number"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="date"
                    name="clear_date"
                    placeholder="Clear Date"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="text"
                    name="buisness_year"
                    placeholder="Business Year"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="text"
                    placeholder="Document id"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="date"
                    placeholder="Posting Date"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="date"
                    placeholder="Document Create Date"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="date"
                    placeholder="Due Date"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="text"
                    placeholder="Invoice Currency"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="text"
                    placeholder="Document type"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="text"
                    placeholder="Posting Id"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="text"
                    placeholder="Total Open amount"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="date"
                    placeholder="Baseline Create Date"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="text"
                    placeholder="Customer Payment Terms"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="text"
                    placeholder="Invoice Id"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} style={{ marginTop: "20px" }}>
                <Grid item xs={6}>
                  <Button
                    className="button"
                    fullWidth
                    style={{ color: "white", fontWeight: 500 }}
                    variant="outlined"
                  >
                    Add
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    className="button"
                    fullWidth
                    style={{ color: "white", fontWeight: 500 }}
                    variant="outlined"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Modal>
        </Grid>
        <Grid item xs={4}>
          <Button
            className="button"
            style={{ color: "white", fontWeight: 500 }}
            variant="outlined"
            onClick={handleOpenEdit}
          >
            EDIT
          </Button>
          <Modal
            class="modal"
            open={openEdit}
            onClose={handleCloseEdit}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography variant="h6" style={{ marginBottom: "10px" }}>
                EDIT
              </Typography>
              <Grid
                container
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="text"
                    placeholder="Invoice id"
                  />
                </Grid>
                <Grid item xs={2} sm={3} md={3}>
                  <OutlinedInput
                    size="small"
                    style={{ backgroundColor: "white", borderRadius: "8px" }}
                    type="text"
                    placeholder="Customer Payment Terms"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={1} style={{ marginTop: "20px" }}>
                <Grid item xs={6}>
                  <Button
                    className="button"
                    fullWidth
                    style={{ color: "white", fontWeight: 500 }}
                    variant="outlined"
                  >
                    EDIT
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    className="button"
                    fullWidth
                    style={{ color: "white", fontWeight: 500 }}
                    variant="outlined"
                    onClick={handleClose}
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Modal>
        </Grid>
        <Grid item xs={4}>
          <Button
            className="button"
            style={{ color: "white", fontWeight: 500 }}
            variant="outlined"
            onClick={handleOpenDelete}
          >
            DELETE
          </Button>
          <Modal
            class="modal"
            open={openDelete}
            onClose={handleCloseDelete}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Typography variant="body1">Delete Records?</Typography>
              <Typography variant="body2">
                Are you sure you want to delete these record[s]?
              </Typography>
              <Grid container spacing={1} style={{ marginTop: "20px" }}>
                <Grid item xs={6}>
                  <Button
                    className="button"
                    fullWidth
                    style={{ color: "white", fontWeight: 500 }}
                    variant="outlined"
                    onClick={handleCloseDelete}
                  >
                    Cancel
                  </Button>
                </Grid>
                <Grid item xs={6}>
                  <Button
                    className="button"
                    fullWidth
                    style={{ color: "white", fontWeight: 500 }}
                    variant="outlined"
                  >
                    Delete
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Modal>
        </Grid>
      </Grid>
    </Grid>
  );
}
