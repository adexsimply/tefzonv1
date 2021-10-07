import { Input } from "antd";
import React from "react";
import { FaSearch } from "react-icons/fa";
import TransactionListView from "./TransactionListView";

function TransactionSideBar ({ transactions }) {
	return (
    <div className={'h-auto px-6 py-8 flex flex-col items-center bg-primary-brand-darker overflow-hidden'}>
      {/* <div className={'flex flex-col justify-between w-full h-96 bg-cover'} > */}
        <Input size="large" placeholder="large size" prefix={<FaSearch />} className={'w-side-bar-width'} />
      {/* </div> */}
      <div className='w-full mt-6 mb-4'>
        <p className={'text-white h-6 font-bold'}>Recent Transactions</p>
      </div>
      <div className='bg-white py-2 w-full'>
        {transactions.map((item, index) => {
          return (
            <TransactionListView transaction={item} />
          );
        })}
        {transactions.length < 1 && (
          <p className={'text-gray-500 text-sm font-bold'}>No transactions yet</p>
        )}
      </div>
    </div>
	);
};

export default TransactionSideBar;
