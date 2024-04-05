import React from "react";
import NavBar from "../components/NavBar";
import NavBreadcrumb from "../components/NavBreadcrumb";
import FooterForm from "../components/FooterForm";
import ButtonsBorrowed from "../components/ButtonsBorrowed";
import AddBorrowedTable from "../components/AddBorrowedTable";

const Borrowed = () => {
  return (
    <>
      <NavBar />
      <NavBreadcrumb page="Borrowed" />
      <ButtonsBorrowed />
      <AddBorrowedTable />
      <FooterForm />
    </>
  );
};

export default Borrowed;
