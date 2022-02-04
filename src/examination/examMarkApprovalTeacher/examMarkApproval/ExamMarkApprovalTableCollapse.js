import React from "react";
import { TableRow, TableCell } from "@material-ui/core";

const ExamMarkApprovalTableCollapse = ({ item }) => {
    return (
      <>
        <TableRow>
          <TableCell>{item.RollNo}</TableCell>
          <TableCell>{item.FullName}</TableCell>
          <TableCell>{item.FullMark}</TableCell>
          <TableCell>{item.FullMarkPractical}</TableCell>
          <TableCell>{item.ObtainedMark}</TableCell>
          <TableCell>{item.ObtainedMarkPractical}</TableCell>
          <TableCell>{item.Division}</TableCell>
          <TableCell>{item.UpdatedOn}</TableCell>
          <TableCell>{item.Status}</TableCell>
          <TableCell>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={() => updateCollegeHandler(item.IDAcademicStudentExamData)}
        >
          <EditIcon style={{ fontSize: 12 }} />
        </Button>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={() => deleteCollegeHandler(item.IDAcademicStudentExamData)}
        >
          <DeleteIcon style={{ fontSize: 12 }} />
        </Button>
      </TableCell>
        </TableRow>
      </>
    );
  };

  export default ExamMarkApprovalTableCollapse;