import React from "react";
import {
  Button,
  TableRow,
  TableCell,
  makeStyles,
  Box,
  Typography,
  Grid,
  List,
  ListItem,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
    button: {
      marginRight: "1px",
      padding: "5px",
      minWidth: "10px",
      fontSize: "12px",
    },
  });

  const ClassNotificationTeacherTableCollapse = ({item,updateNotificationHandler})=>{
    const classes = useStyles();
    return (
        <>
      <TableRow>
        <TableCell>{item.SenderID}</TableCell>
        <TableCell>{item.MessageDescription}</TableCell>
        <TableCell>{item.Created_On?.slice(0,10)}</TableCell>
          </TableRow>
          </>
      )

  }

  export default ClassNotificationTeacherTableCollapse;
