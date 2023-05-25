import MenuItem from './MenuItem';
import { useState } from 'react';

export default function Menu() {
  const items = ['About', 'Careers', 'Events', 'Products', "Support"];
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      <a className="hover:cursor-pointer" onClick={() => setOpenMenu(true)}>
        <img className="w-5 lg:hidden" src="/images/icon-hamburger.svg" alt="" />
      </a>
      
      { openMenu && 
        <div className="top-0 right-0 bottom-0 left-0 fixed z-10 bg-black text-white">
          <div className="flex justify-between items-center mx-6 my-12">
            <a className="hover:cursor-pointer">
              <img className="w-40" src="/images/logo.svg" alt="loopstudios"/>
            </a>
            
            <a className="hover:cursor-pointer" onClick={() => setOpenMenu(false)}>
              <img src="images/icon-close.svg" alt="" />
            </a>
          </div> 
        
          <div className="w-5/12 flex flex-col items-start gap-6 mx-6 mt-48 text-2xl font-josefin-sans uppercase">
            {items.map(item => <MenuItem key={crypto.randomUUID()} item={item} />)}
          </div>
        </div>
      }
    </>
  );
}