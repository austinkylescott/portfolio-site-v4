import React from "react";
import Header from "../components/Header";
import "../scss/main.scss";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faDesktop } from "@fortawesome/free-solid-svg-icons";
library.add(fab, faDesktop);

export default function Layout(props) {
  return (
    <div>
      <Header />
      {props.children}
    </div>
  );
}
