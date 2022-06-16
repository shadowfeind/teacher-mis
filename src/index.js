require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
import App from "./App";


sessionStorage.setItem(
  "blueberrytoken",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI4ZGJjMmQ1NS05ZGE4LTQ5NjEtODBkYi05YmVmM2Q1NzBkZDAiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiMTQwMDkiLCJJRFVzZXIiOiIxNDAwOSIsIklEUm9sZSI6IjUiLCJNYXJrQXNBZG1pbiI6IkZhbHNlIiwiSURIUkJyYW5jaCI6IjEiLCJJRERlcGFydG1lbnQiOiIxIiwiY29tcGFueSI6IjIiLCJJc1RlbXBvcmFyeVNlc3Npb25FbmFibGVkIjoiRmFsc2UiLCJJc05ld2x5QWRlZCI6IkZhbHNlIiwiSXNEZXBhcnRtZW50SGVhZCI6IkZhbHNlIiwiUmVtZW1iZXJNZSI6IkZhbHNlIiwiRnVsbE5hbWUiOiJKZW5uaWUgIENyaWdsZXIiLCJwaWRSZWZGb3JFZGl0IjoiY2xhc3NvbmUiLCJleHAiOjE2NTU1NDU4MzEsImlzcyI6Imh0dHA6Ly9teXNpdGUuY29tIiwiYXVkIjoiaHR0cDovL215c2l0ZS5jb20ifQ._oMP3oYxOO4vJujsMdF5H58J-vCUxbM728VEg6Q13Wc"
);
sessionStorage.setItem(
  "blueberryrefreshtoken",
  "5n06Mb50Bs5X6o8rkseiCWZvmBWMrvSJDQwShFxZP8Q="
);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);
