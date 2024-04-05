import React from "react";
import NavBar from "../components/NavBar";
import FooterForm from "../components/FooterForm";
import AddButtons from "../components/AddButtons";
import NavBreadcrumb from "../components/NavBreadcrumb";
import AddBooksTable from "../components/AddBooksTable";

const AddBooks = () => {
  return (
    <>
      <NavBar />
      <NavBreadcrumb page="Add Books" />
      <AddButtons />
      <AddBooksTable />
      <FooterForm />
    </>
  );
};

export default AddBooks;
