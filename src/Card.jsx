import { useState } from 'react';

export default function Card({ name_1, name_2, image }) {
  const [active, setActive] = useState(false);

  let style = "h-26 bg-cover bg-no-repeat lg:h-96 " + image;

  if (active) {
    style = "h-26 bg-cover bg-no-repeat lg:h-96 opacity-50 " + image;
  }

  return (
    <div className="h-26 lg:h-96 text-white hover:cursor-pointer hover:text-black" onMouseOver={() => setActive(true)} onMouseOut={() => setActive(false)}>
      <div className={style}></div>
      <p className="font-josefin-sans text-xl border-white relative -top-12 left-4 leading-5 lg:-top-20 lg:left-6 lg:text-2xl lg:leading-6">{name_1}</p>
      <p className="font-josefin-sans text-xl border-white relative -top-12 left-4 leading-5 lg:-top-20 lg:left-6 lg:text-2xl lg:leading-6">{name_2}</p>
    </div>
  )
}