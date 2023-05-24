import { useState } from 'react';

export default function MenuItems() {
  const [active, setActive] = useState(false);
  const items = ['About', 'Careers', 'Events', 'Products', "Support"];

  let menuBar = "invisible border-t-2 w-1/3 mt-1";

  if (active) {
    menuBar = "border-t-2 w-1/3 mt-1"
  }

  return (
    items.map(item => {
      return (
        <a key={crypto.randomUUID()} className="flex flex-col items-center" onMouseOver={() => setActive(true)} onMouseOut={() => setActive(false)}>
          <p className="hover:cursor-pointer">{item}</p>
          <div className={menuBar}></div>
        </a>
      )
    })
  )
}