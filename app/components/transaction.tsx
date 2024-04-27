import React from 'react'
import action from "../assets/action.svg";
import Actionbtn from './actionbtn';
import Topsection from './topsection';

function Transaction() {

    const TransactionList = [
        {
          "date": "2024-04-26",
          "name": "John Doe",
          "email": "john@example.com",
          "REF": "REF001",
          "type": "Deposit",
          "amount": 1000,
        
        },
        {
          "date": "2024-04-25",
          "name": "Jane Smith",
          "email": "jane@example.com",
          "REF": "REF002",
          "type": "Withdrawal",
          "amount": 500,
         
        },
        {
          "date": "2024-04-24",
          "name": "Alice Johnson",
          "email": "alice@example.com",
          "REF": "REF003",
          "type": "Transfer",
          "amount": 750,
        
        },
        {
          "date": "2024-04-23",
          "name": "Bob Brown",
          "email": "bob@example.com",
          "REF": "REF004",
          "type": "Deposit",
          "amount": 1200,
          
        },
        {
          "date": "2024-04-22",
          "name": "Emily Davis",
          "email": "emily@example.com",
          "REF": "REF005",
          "type": "Withdrawal",
          "amount": 300,
          
        },
        {
          "date": "2024-04-21",
          "name": "Michael Wilson",
          "email": "michael@example.com",
          "REF": "REF006",
          "type": "Transfer",
          "amount": 950,
         
        },
        {
          "date": "2024-04-20",
          "name": "Sophia Lee",
          "email": "sophia@example.com",
          "REF": "REF007",
          "type": "Deposit",
          "amount": 800,
         
        }
      ];
      

      
  return (
    <div>
       <h1 className="text-sm mb-4">Transaction</h1>
       
       <Topsection /><br/>
       <div className="overflow-x-auto">
        {/* Tabs */}
        <div className="flex">
          <div className="w-full h-16 bg-[#222222] border-b border-[#413D3D] p-3">
          <input
          type="text"
          className="border border-transparent rounded-xl py-2 px-4 w-1/3 focus:outline-none focus:border-grey-500 bg-[#282929] text-[#989898] text-xs"
          placeholder="search"
         
        />
          </div>
        </div>

       
          <table className="table-auto border-collapse w-full">
            <tbody>
             
              {TransactionList.map((item, index) => (
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
                    {item.REF}
                  </td>
                  <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                    {item.type}
                  </td>
                  <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                    {item.amount}
                  </td>
                  <td className="px-4 py-4 text-xs font-light border-b border-[#413D3D] bg-[#2F2F2F]">
                  <Actionbtn />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      

      
      </div>
    </div>
  )
}

export default Transaction
