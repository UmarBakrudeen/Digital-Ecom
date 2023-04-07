// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";

// // Redux
// import { configureStore } from "@reduxjs/toolkit";
// import { Provider } from "react-redux";

// // Features Files
// import productSlice from "./features/productSlice";

// const store = configureStore({
//   products: productSlice,
// });

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";

import store from "../src/Redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    {/* <React.StrictMode> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </React.StrictMode> */}
  </>
);
