import { useState } from 'react';

export default function MenuItem({ item }) {
  const [active, setActive] = useState(false);

  let menuBar = "invisible border-t-2 w-1/3 mt-1";

  if (active) {
    menuBar = "border-t-2 w-1/3 mt-1"
  }

  return (
    <a className="flex flex-col items-center" onMouseOver={() => setActive(true)} onMouseOut={() => setActive(false)}>
      <p className="hover:cursor-pointer">{item}</p>
      <div className={menuBar}></div>
    </a>
  )
}