import React from "react";
import { TableRow, TableCell, makeStyles } from "@material-ui/core";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const useStyles = makeStyles({
  button: {
    marginRight: "1px",
    padding: "5px",
    minWidth: "10px",
    fontSize: "12px",
  },
});

const ResourcesTableCollapse = ({ item }) => {
  const classes = useStyles();

  return (
    <TableRow>
      <TableCell>
        <CloudDownloadIcon />
      </TableCell>
      <TableCell>{item.CourseName}</TableCell>
      <TableCell>{item.CourseDescription}</TableCell>
      <TableCell>{item.FirstName}</TableCell>
      <TableCell>{item.Created_On.slice(0, 10)}</TableCell>
      <TableCell>{item.IsActive ? "Active" : "InActive"}</TableCell>
    </TableRow>
  );
};

export default ResourcesTableCollapse;
