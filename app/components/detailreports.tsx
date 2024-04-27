"use client";
import React, { useState } from "react";

function DetailReports() {
  const CardRequest = [
    {
      date: "2024-05-01",
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      country: "USA",
      address: "123 Main St",
    },
    {
      date: "2024-05-02",
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "0987654321",
      country: "Canada",
      address: "456 Elm St",
    },
    {
        date: "2024-05-01",
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        country: "USA",
        address: "123 Main St",
      },
      {
        date: "2024-05-01",
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        country: "USA",
        address: "123 Main St",
      },
    {
      date: "2024-05-02",
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "0987654321",
      country: "Canada",
      address: "456 Elm St",
    },
    {
      date: "2024-05-02",
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "0987654321",
      country: "Canada",
      address: "456 Elm St",
    },
    {
        date: "2024-05-01",
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        country: "USA",
        address: "123 Main St",
      },
      {
        date: "2024-05-01",
        name: "John Doe",
        email: "john@example.com",
        phone: "1234567890",
        country: "USA",
        address: "123 Main St",
      },
    // Add more data objects as needed
  ];

  const CardIssued = [
    {
      date: "2024-05-01",
      name: "John Doe",
      email: "john@example.com",
      phone: "1234567890",
      country: "USA",
      address: "123 Main St",
    },
    {
      date: "2024-05-02",
      name: "Jane Doe",
      email: "jane@example.com",
      phone: "0987654321",
      country: "Canada",
      address: "456 Elm St",
    },

    // Add more data objects as needed
  ];

  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <h1 className="text-sm mb-4">Detail Report</h1>

      <div className="overflow-x-auto">
        {/* Tabs */}
        <div className="flex">
          <div className="w-full h-16 bg-[#222222] border-b border-[#413D3D] p-3">
            <div className="flex flex-row gap-2">
              <button
                className={` rounded-xl h-8 p-4 bg-[#282929] text-xs border border-[#595959] cursor-pointer flex items-center justify-center ${
                  activeTab === 1
                    ? "bg-[#141414] border-[#F1D017] text-[#F1D017]"
                    : ""
                }`}
                onClick={() => setActiveTab(1)}
              >
                Card Request
              </button>
              <button
                className={` rounded-xl h-8 p-4 bg-[#282929] text-xs border border-[#595959] cursor-pointer flex items-center justify-center ${
                  activeTab === 2
                    ? "bg-[#141414] border-[#F1D017] text-[#F1D017]"
                    : ""
                }`}
                onClick={() => setActiveTab(2)}
              >
                Card issued
              </button>
            </div>
          </div>
        </div>

        {/* Table */}
        {activeTab === 1 && (
          <table className="table-auto border-collapse w-full">
            <tbody>
              {/* Map through the data and render rows */}
              {CardRequest.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                    {item.date}
                  </td>
                  <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                    {item.name}
                  </td>
                  <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                    {item.email}
                  </td>
                  <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                    {item.phone}
                  </td>
                  <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                    {item.country}
                  </td>
                  <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                    {item.address}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}

        {activeTab === 2 && (
          <table className="table-auto border-collapse w-full">
            <tbody>
              {CardIssued.map((item, index) => (
                <tr key={index}>
                  <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                    {item.date}
                  </td>
                  <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                    {item.name}
                  </td>
                  <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                    {item.email}
                  </td>
                  <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                    {item.phone}
                  </td>
                  <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                    {item.country}
                  </td>
                  <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                    {item.address}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default DetailReports;
