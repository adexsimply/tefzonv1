import React from "react";
import WalletOverlay from "../assets/img/cardOverlay.svg";

function WalletCard ({ amount}) {
	return (
    <div className={'w-80 h-44 rounded-lg overflow-hidden'} style={{background: 'radial-gradient(202.03% 202.03% at -66.88% -102.03%, #82DEA9 0%, #522593 100%)'}}>
      <div className={'flex flex-col py-6 px-7 justify-between w-full h-full bg-cover'} style={{backgroundImage: `url(${WalletOverlay})`}} >
        <p className='text-white'>Tefzon Wallet</p>
        <h2 className='text-white text-2xl font-bold'>N 50, 000</h2>
        <div>
          <p className='text-white text-xs'>Number</p>
          <p className='text-white'>1234 5678 9012 3456</p>
        </div>
      </div>
    </div>
	);
};

export default WalletCard;
