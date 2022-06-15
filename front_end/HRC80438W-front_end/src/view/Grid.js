import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { getData } from "../services/data.js";
import Header from "../components/header.js";
import Checkbox from "@mui/material/Checkbox";
import Footer from "../components/footer.js";
import ButtonsPane from "../components/buttonsPane.js";

export default function Grid() {
  const [items, setItems] = useState([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  useEffect(async () => {
    setItems(await getData());
  }, []);
  return (
    <div className="App">
      <Header />

      <div style={{ backgroundColor: "#283e4c", paddingTop: "40px", paddingBottom: "20px", paddingLeft: "10px" }}>
        <ButtonsPane />
      </div>

      <TableContainer component={Paper} style={{borderRadius: "0px"}}>
        <Table
          size="small"
          aria-label="a dense table"
          style={{ backgroundColor: "#283e4c" }}
        >
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox style={{ color: "white" }} />
              </TableCell>
              <TableCell style={{ color: "white" }}>Sl No</TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Business Code
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Customer Number
              </TableCell>
              <TableCell
                style={{ color: "white", minWidth: "75px" }}
                align="left"
              >
                Clear Date
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Business Year
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Document Id
              </TableCell>
              <TableCell
                style={{ color: "white", minWidth: "75px" }}
                align="left"
              >
                Posting Date
              </TableCell>
              <TableCell
                style={{ color: "white", minWidth: "75px" }}
                align="left"
              >
                Document Create Date
              </TableCell>

              <TableCell
                style={{ color: "white", minWidth: "75px" }}
                align="left"
              >
                Due In Date
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Invoice Currency
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Document Type
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Posting Id
              </TableCell>

              <TableCell style={{ color: "white" }} align="left">
                Total Open Amount
              </TableCell>
              <TableCell
                style={{ color: "white", minWidth: "75px" }}
                align="left"
              >
                Baseline Create Date
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Customer Payment Terms
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Invoice Id
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                isopen
              </TableCell>
              <TableCell style={{ color: "white" }} align="left">
                Aging_Bucket
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((item, index) => (
                <TableRow
                  key={index}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell style={{ color: "white" }} padding="checkbox">
                    <Checkbox style={{ color: "white" }} />
                  </TableCell>
                  <TableCell
                    style={{ color: "white" }}
                    component="th"
                    scope="row"
                  >
                    {item.sl_no}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {item.business_code}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {item.cust_number}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {item.clear_date}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {item.buisness_year}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {item.doc_id}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {item.posting_date}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {item.document_create_date}
                  </TableCell>

                  <TableCell style={{ color: "white" }} align="right">
                    {item.due_in_date}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {item.invoice_currency}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {item.document_type}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {item.posting_id}
                  </TableCell>

                  <TableCell style={{ color: "white" }} align="right">
                    {item.total_open_amount}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {item.baseline_create_date}
                  </TableCell>

                  <TableCell style={{ color: "white" }} align="right">
                    {item.cust_payment_terms}
                  </TableCell>

                  <TableCell style={{ color: "white" }} align="right">
                    {item.invoice_id}
                  </TableCell>
                  <TableCell style={{ color: "white" }} align="right">
                    {item.isOpen}
                  </TableCell>

                  <TableCell style={{ color: "white" }} align="right">
                    {item.aging_bucket}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>

      <TablePagination
        style={{ backgroundColor: "#283e4c", color: "white" }}
        rowsPerPageOptions={[5, 10, 25, 100]}
        component="div"
        count={items.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <Footer />
    </div>
  );
}
