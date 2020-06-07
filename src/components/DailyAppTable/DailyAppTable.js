import React, { useState } from "react";
import "./DailyAppTable.css";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { LinearProgress } from "@material-ui/core";

const DailyAppTable = (props) => {
  const [visited, setVisited] = useState([]);
  console.log(props.dailyAppointment);
  const handleVisit = (id) => {
    fetch("http://localhost:3700/dailyAppointment/updateVisit", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    }).then((res) => res.json());
    setVisited(true);
  };

  return (
    <div>
      <div className="container daily-table-container">
        <div className="d-flex justify-content-between mt-3 mb-1 text-info">
          <h6>Appointments</h6>
          <h6>{props.date.toDateString()}</h6>
        </div>
        <TableContainer component={Paper}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell align="right">Schedule</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {!props.isLoading &&
                props.dailyAppointment.map((appointment) => (
                  <TableRow key={appointment.name}>
                    <TableCell component="th" scope="row">
                      {appointment.name}
                    </TableCell>
                    <TableCell align="right">{appointment.startTime}</TableCell>
                    <TableCell align="right">
                      {visited ? (
                        <button className="btn btn-success pt-0 pb-0" disabled>
                          Visited
                        </button>
                      ) : (
                        <button
                          onClick={() => handleVisit(appointment.id)}
                          className="btn btn-danger pt-0 pb-0"
                        >
                          Not Visited
                        </button>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        {props.isLoading && <LinearProgress />}
      </div>
    </div>
  );
};

export default DailyAppTable;
