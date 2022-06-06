import React from "react";
import { Footer, Tabs } from "../../components";
import { useDocumentTitle } from "../../hooks";
import "./profile.css";

export function Profile() {
  useDocumentTitle("Profile");

  return (
    <div className='cart-container text-primary'>
      <main className='profile-main'>
        <h2>Profile</h2>
        <Tabs />
      </main>
      <Footer />
    </div>
  );
}
