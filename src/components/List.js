import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";

function List({ getselectedData, showList }) {
  const dispatch = useDispatch();
  const person = useSelector((state) => state.person);
  const deletePersonHandler = (id) => {
    dispatch({ type: "REMOVE_PERSON", payload: id });
  };

  const editPersonHandler = (data) => {
    dispatch({ type: "SELECTED_PERSON", payload: data });
    // console.log("list", data);
    getselectedData(data);
    showList();
  };
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="customized table">
        <TableHead>
          <TableRow sx={{ bgcolor: "gray", fontWeight: "bold" }}>
            <TableCell>Name</TableCell>
            <TableCell align="center">Designation</TableCell>
            <TableCell align="center">Department</TableCell>
            <TableCell align="center">Edit</TableCell>
            <TableCell align="center">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {person.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="center">{row.currentDesignation}</TableCell>
              <TableCell align="center">{row.currentDepartment}</TableCell>
              <TableCell align="center">
                <Button onClick={() => editPersonHandler(row)}>
                  <ModeEditIcon />
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  sx={{ color: "red" }}
                  onClick={() => deletePersonHandler(row.id)}
                >
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default List;
