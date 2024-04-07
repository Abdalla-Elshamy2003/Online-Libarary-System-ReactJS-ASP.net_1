import React from 'react';
import NavBar from "../components/NavBar";
import NavBreadcrumb from "../components/NavBreadcrumb";
import Footer from "../components/FooterForm";
import MangeBorrowedAdmin from '../components/MangeBorrowedAdmin';

const MangeBorrowed = () => {
    return (
        <>
            <NavBar />
            <NavBreadcrumb page="Mange Borrowed" />
            <MangeBorrowedAdmin />
            <Footer />
        </>
    )
}

export default MangeBorrowed