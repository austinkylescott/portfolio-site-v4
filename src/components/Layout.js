import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../scss/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faDesktop);

export default function Layout(props) {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Header />
        {props.children}
      </div>
      <Footer />
    </div>
  );
}
