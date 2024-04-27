'use client'
import React, { useState } from "react";
import DetailReports from "../components/detailreports";
import Sidebar from "../components/sidedbar";
import Countrywise from "../components/countrywise";
import Transaction from "../components/transaction";
import Dashboardmain from "../components/dashboardmain";


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main content */}
      <div className="flex-1 bg-[#1A1A1A]">
        <div className="p-5">
          <div className="mb-8 md:hidden" >
          <svg width="22" height="22" viewBox="0 0 14 12" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path fill-rule="evenodd" clip-rule="evenodd" d="M14 0.782609C14 0.990169 13.9368 1.18923 13.8243 1.336C13.7117 1.48276 13.5591 1.56522 13.4 1.56522H0.6C0.44087 1.56522 0.288258 1.48276 0.175736 1.336C0.063214 1.18923 0 0.990169 0 0.782609C0 0.575048 0.063214 0.375988 0.175736 0.229221C0.288258 0.0824531 0.44087 0 0.6 0H13.4C13.5591 0 13.7117 0.0824531 13.8243 0.229221C13.9368 0.375988 14 0.575048 14 0.782609ZM14 6C14 6.20756 13.9368 6.40662 13.8243 6.55339C13.7117 6.70016 13.5591 6.78261 13.4 6.78261H0.6C0.44087 6.78261 0.288258 6.70016 0.175736 6.55339C0.063214 6.40662 0 6.20756 0 6C0 5.79244 0.063214 5.59338 0.175736 5.44661C0.288258 5.29984 0.44087 5.21739 0.6 5.21739H13.4C13.5591 5.21739 13.7117 5.29984 13.8243 5.44661C13.9368 5.59338 14 5.79244 14 6ZM14 11.2174C14 11.425 13.9368 11.624 13.8243 11.7708C13.7117 11.9175 13.5591 12 13.4 12H0.6C0.44087 12 0.288258 11.9175 0.175736 11.7708C0.063214 11.624 0 11.425 0 11.2174C0 11.0098 0.063214 10.8108 0.175736 10.664C0.288258 10.5172 0.44087 10.4348 0.6 10.4348H13.4C13.5591 10.4348 13.7117 10.5172 13.8243 10.664C13.9368 10.8108 14 11.0098 14 11.2174Z" fill="#6D6D6D"/>
          </svg>
          </div>
          {activeTab === 1 && <Dashboardmain /> }

          {activeTab === 2 && <Countrywise /> }

          {activeTab === 3 && <DetailReports />}

          {activeTab === 4 && <Transaction /> }
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
