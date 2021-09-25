import React, { useContext } from 'react';
// import Form from 'antd/lib/form/Form';

function SectionContainer({children, className}) {

  return (
    <div className={className}>
      <div className={'w-full py-3 bg-white'}>
        {children}
      </div>
      <div className={'w-11/12 h-2 m-auto bg-tw-green'}/>
    </div>
  );
}

export default SectionContainer;
