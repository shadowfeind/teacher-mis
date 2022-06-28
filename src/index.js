require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";

// sessionStorage.setItem(
//   "blueberrytoken",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmZTY0MGFmNy03NzVlLTRmNjctODBjMC03NjRmYmM2ZmYwYmEiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTQwMDkiLCJJRFVzZXIiOiIxNDAwOSIsIklEUm9sZSI6IjUiLCJNYXJrQXNBZG1pbiI6IkZhbHNlIiwiSURIUkJyYW5jaCI6IjEiLCJJRERlcGFydG1lbnQiOiIxIiwiY29tcGFueSI6IjIiLCJJc1RlbXBvcmFyeVNlc3Npb25FbmFibGVkIjoiRmFsc2UiLCJJc05ld2x5QWRlZCI6IkZhbHNlIiwiSXNEZXBhcnRtZW50SGVhZCI6IkZhbHNlIiwiUmVtZW1iZXJNZSI6IkZhbHNlIiwiRnVsbE5hbWUiOiJKZW5uaWUgIENyaWdsZXIiLCJwaWRSZWZGb3JFZGl0IjoiY2xhc3NvbmUiLCJleHAiOjE2NTY2NTU0NjIsImlzcyI6Imh0dHA6Ly9teXNpdGUuY29tIiwiYXVkIjoiaHR0cDovL215c2l0ZS5jb20ifQ.9wdFtKC2chBsKm_F-7VwuTJx6JlLjzkUfH9-LzhMGhQ"
// );
// sessionStorage.setItem(
//   "blueberryrefreshtoken",
//   "+2YQETXO6m2D7I3QI28MkyRxEnCSfeNyWP9p7yV79nI="
// );

// sessionStorage.setItem(
//   "blueberrytoken",
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlMDRkMzY5Ny04OTU5LTQyNjItODBiNS02YmQ5ZmU0M2Q4ODUiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTUxNjAiLCJJRFVzZXIiOiIxNTE2MCIsIklEUm9sZSI6IjUiLCJNYXJrQXNBZG1pbiI6IkZhbHNlIiwiSURIUkJyYW5jaCI6IjEiLCJJRERlcGFydG1lbnQiOiIxIiwiY29tcGFueSI6IjIiLCJJc1RlbXBvcmFyeVNlc3Npb25FbmFibGVkIjoiRmFsc2UiLCJJc05ld2x5QWRlZCI6IkZhbHNlIiwiSXNEZXBhcnRtZW50SGVhZCI6IkZhbHNlIiwiUmVtZW1iZXJNZSI6IkZhbHNlIiwiRnVsbE5hbWUiOiJTdW5kYXIgIFNpciIsInBpZFJlZkZvckVkaXQiOiJzdW5kYXIiLCJleHAiOjE2NTYyNTAyNTAsImlzcyI6Imh0dHA6Ly9teXNpdGUuY29tIiwiYXVkIjoiaHR0cDovL215c2l0ZS5jb20ifQ.cG5l_zk9FKCQvhDiTEuN0Sw7UF7Nk7mA2nIoz6RMTuQ"
// );
// sessionStorage.setItem(
//   "blueberryrefreshtoken",
//   "1UXQv5fCjgD0OeKCe9Ejr1F7rRGUNGEsvPNU473DaRI="
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
