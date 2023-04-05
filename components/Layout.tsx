import React from "react";
import { Navbar, Footer } from "@/components";

const Layout = ({ children }: any) => {
  return (
    <div className="max-w-[1650px] w-full mx-auto  ">
      <Navbar />
      <div className="max-w-[1650px] w-full mx-auto ">
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
