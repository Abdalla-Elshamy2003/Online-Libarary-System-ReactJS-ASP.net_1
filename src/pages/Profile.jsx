import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/FooterForm";
import ProfileDetails from "../components/ProfileDetails";
import NavBreadcrumb from "../components/NavBreadcrumb";

const Profile = () => {
  return (
    <>
      <NavBar />
      <NavBreadcrumb page="Profile" />
      <ProfileDetails />
      <Footer />
    </>
  );
};

export default Profile;
