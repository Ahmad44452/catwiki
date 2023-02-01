import React from "react";
import ReactDOM from "react-dom/client";

import AppRoutes from "./AppRoutes";
import GlobalStyles from "./Global.Styled";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlobalStyles />
    <AppRoutes />
  </React.StrictMode>
);
