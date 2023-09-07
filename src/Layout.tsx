import React from "react";

import Navbar from "./Components/UI/Navbar/Navbar";

import "./App.css";
import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className={"layout"}>
      <Navbar />
      <main className={"main"}>{children}</main>
    </div>
  );
};

export default Layout;
