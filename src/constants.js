// export const API_URL = "http://103.90.86.151:84";
// export const API_URL = "http://103.90.86.151:100";
// export const API_URL = "http://192.168.1.85:88";

export const API_URL = "https://mis.vidyacube.com";

export const USER_SESSION = sessionStorage.getItem("blueberrytoken");

//for fcm token
export const tokenHeader = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `key=AAAACB9i9IE:APA91bEuqomtN9gss5UOVzngtIofWkWo9tUWAZ_2LYBNeKbuZXXns-S6NuBWEgYCnQj8gsI6YbvlbxKIByeYvHjgf2U-GjTTPCB44_K6yjcPhvDHqQD5WaUCshNEDzAuz3r91MeBJe3D`,
  },
};

export const tokenConfig = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyZWExNWNkNi1mOWVhLTRkYzktYWQ3NS0zMjZlY2Q1NWJjNGIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTQwMDkiLCJJRFVzZXIiOiIxNDAwOSIsIklEUm9sZSI6IjUiLCJNYXJrQXNBZG1pbiI6IkZhbHNlIiwiSURIUkJyYW5jaCI6IjEiLCJJRERlcGFydG1lbnQiOiIxIiwiY29tcGFueSI6IjIiLCJJc1RlbXBvcmFyeVNlc3Npb25FbmFibGVkIjoiRmFsc2UiLCJJc05ld2x5QWRlZCI6IkZhbHNlIiwiSXNEZXBhcnRtZW50SGVhZCI6IkZhbHNlIiwiUmVtZW1iZXJNZSI6IkZhbHNlIiwiRnVsbE5hbWUiOiJTdXJlc2ggQ2xhc3MgT25lIiwicGlkUmVmRm9yRWRpdCI6ImNsYXNzb25lIiwiZXhwIjoxNjUyMjU2MjEzLCJpc3MiOiJodHRwOi8vbXlzaXRlLmNvbSIsImF1ZCI6Imh0dHA6Ly9teXNpdGUuY29tIn0.D4gK3m1PJ-tDkB13GuJo2AGWYkdtarJ1VPTtyQkFAJk`,
  },
};

// export const tokenConfig = {
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${USER_SESSION}`,
//   },
// };
