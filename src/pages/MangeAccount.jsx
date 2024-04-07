import React from "react";
import NavBar from "../components/NavBar";
import MangeAccountAdmin from "../components/MangeAccountAdmin";
import NavBreadcrumb from "../components/NavBreadcrumb";

import Footer from "../components/FooterForm";

const MangeAccount = () => {
    
    return (
        <>
        <NavBar />
        <NavBreadcrumb page="Mange Account" />
        <MangeAccountAdmin/>
        <Footer />
      </>
    );


    };

export default MangeAccount;
