require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

// const data = {
//   $id: "1",

//   AccessToken:
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIyYzdkMjVmMS1iYjcxLTRhMTYtYTlhZC1mMmNjNTYwZWFlZmIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTQwMDkiLCJJRFVzZXIiOiIxNDAwOSIsIklEUm9sZSI6IjUiLCJNYXJrQXNBZG1pbiI6IkZhbHNlIiwiSURIUkJyYW5jaCI6IjEiLCJJRERlcGFydG1lbnQiOiIxIiwiY29tcGFueSI6IjIiLCJJc1RlbXBvcmFyeVNlc3Npb25FbmFibGVkIjoiRmFsc2UiLCJJc05ld2x5QWRlZCI6IkZhbHNlIiwiSXNEZXBhcnRtZW50SGVhZCI6IkZhbHNlIiwiUmVtZW1iZXJNZSI6IkZhbHNlIiwiRnVsbE5hbWUiOiJTdXJlc2ggQ2xhc3MgT25lIiwicGlkUmVmRm9yRWRpdCI6ImNsYXNzb25lIiwiZXhwIjoxNjUzNTQ2MjgxLCJpc3MiOiJodHRwOi8vbXlzaXRlLmNvbSIsImF1ZCI6Imh0dHA6Ly9teXNpdGUuY29tIn0.aovONI18F12hr4okgmbU7D6XtusGsn-0URIc-0rftsA",
//   RefreshToken: "LXDCf8nOUiENgTPt+Qkjtc4LSIrcbBHbk8I9M9dw2NY=",
// };
sessionStorage.setItem(
  "blueberrytoken",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxYTkxN2NhNS00Y2JlLTQ2YTEtYWIzMi00MTIyNDMxNGFlZjkiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTQwMDkiLCJJRFVzZXIiOiIxNDAwOSIsIklEUm9sZSI6IjUiLCJNYXJrQXNBZG1pbiI6IkZhbHNlIiwiSURIUkJyYW5jaCI6IjEiLCJJRERlcGFydG1lbnQiOiIxIiwiY29tcGFueSI6IjIiLCJJc1RlbXBvcmFyeVNlc3Npb25FbmFibGVkIjoiRmFsc2UiLCJJc05ld2x5QWRlZCI6IkZhbHNlIiwiSXNEZXBhcnRtZW50SGVhZCI6IkZhbHNlIiwiUmVtZW1iZXJNZSI6IkZhbHNlIiwiRnVsbE5hbWUiOiJTdXJlc2ggQ2xhc3MgT25lIiwicGlkUmVmRm9yRWRpdCI6ImNsYXNzb25lIiwiZXhwIjoxNjUzNTQ3MzI3LCJpc3MiOiJodHRwOi8vbXlzaXRlLmNvbSIsImF1ZCI6Imh0dHA6Ly9teXNpdGUuY29tIn0.92FzunchQanMRovzsVLwPjJeAsRb5tpUt96yjaVae5I"
);
sessionStorage.setItem(
  "blueberryrefreshtoken",
  "V82CC9VudAAMMJfulwi6YD/EKVI3me5/K36cyLkFFMo="
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
