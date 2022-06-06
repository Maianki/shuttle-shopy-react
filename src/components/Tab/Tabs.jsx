import React, { useState } from "react";
import { ProfileTab } from "./ProfileTab";
import { AddressesTab } from "./AddressesTab";
import "./tab.css";

export function Tabs() {
  const [activeTab, setActiveTab] = useState("profile");

  const handleActiveTab = (tabname) => {
    setActiveTab(tabname);
  };

  return (
    <div className='tabs'>
      {/* Tab nav */}
      <ul className='tab-nav'>
        <li
          className={
            activeTab === "profile"
              ? `tab-list-inline active-tab`
              : `tab-list-inline`
          }
          role='button'
          onClick={() => handleActiveTab("profile")}
        >
          Profile
        </li>
        <li
          className={
            activeTab === "addresses"
              ? `tab-list-inline active-tab`
              : `tab-list-inline`
          }
          role='button'
          onClick={() => handleActiveTab("addresses")}
        >
          Addresses
        </li>
      </ul>
      <div className='outlet'>
        {activeTab === "profile" ? <ProfileTab /> : <AddressesTab />}
      </div>
    </div>
  );
}
