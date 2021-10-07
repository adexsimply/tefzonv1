//TeamCards
import React from 'react';
// import Form from 'antd/lib/form/Form';

function TeamCards({teamName}) {

  return (
    <div className={'flex flex-col justify-center h-20 w-64 p-4 bg-white rounded-lg border-l-8 border-primary-brand-darker'}>
      <div>
      </div>
      <div className={'mt-1'}>
        <h1 className={'text-lg font-bold truncate'}>{teamName}</h1>
        <p className={'text-sm font-medium text-gray-400'}>Active</p>
      </div>
    </div>
  );
}

export default TeamCards;
