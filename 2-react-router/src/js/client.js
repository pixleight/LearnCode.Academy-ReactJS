import React from "react";
import ReactDOM from "react-dom";

import Bootstrap from "./vendor/bootstrap-without-jquery";

import Layout from "./components/Layout";

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
