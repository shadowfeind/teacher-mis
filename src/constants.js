// export const API_URL = "http://103.90.86.151:84";
export const API_URL = "http://103.90.86.151:100";
// export const API_URL = "http://192.168.1.85:88";

export const USER_SESSION = sessionStorage.getItem("blueberrytoken");

// export const tokenConfig = {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI0OTRhZmRhNy01MThkLTQ2YTEtYjkxMy03ODJlOGZiYjIyOTUiLCJJRFVzZXIiOiIxNDAwOSIsIklEUm9sZSI6IjUiLCJNYXJrQXNBZG1pbiI6IkZhbHNlIiwiSURIUkJyYW5jaCI6IjEiLCJJRERlcGFydG1lbnQiOiIxIiwiY29tcGFueSI6IjIiLCJJc1RlbXBvcmFyeVNlc3Npb25FbmFibGVkIjoiRmFsc2UiLCJJc05ld2x5QWRlZCI6IkZhbHNlIiwiSXNEZXBhcnRtZW50SGVhZCI6IkZhbHNlIiwiUmVtZW1iZXJNZSI6IkZhbHNlIiwiRnVsbE5hbWUiOiJTdXJlc2ggQ2xhc3MgT25lIiwicGlkUmVmRm9yRWRpdCI6ImNsYXNzb25lIiwiZXhwIjoxNjQ0MDM2NzE1LCJpc3MiOiJodHRwOi8vbXlzaXRlLmNvbSIsImF1ZCI6Imh0dHA6Ly9teXNpdGUuY29tIn0.s7yz_iNoTKmHnaIxNdx1Ow7G2jyBhPlPcx7SpduM4vE`,
//   },
// };

export const tokenConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${USER_SESSION}`,
  },
};
