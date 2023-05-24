export default function Card({ name_1, name_2, image }) {
  const style = 'h-26 bg-cover bg-no-repeat lg:h-96 lg:hover:opacity-50 ' + image;

  return (
    <>
      <div className="h-26 lg:h-96 text-white lg:hover:cursor-pointer lg:hover:text-black">
        <div className={style}></div>
        <p className="font-josefin-sans text-xl border-white relative -top-12 left-4 leading-5 lg:-top-20 lg:left-6 lg:text-2xl lg:leading-6">{name_1}</p>
        <p className="font-josefin-sans text-xl border-white relative -top-12 left-4 leading-5 lg:-top-20 lg:left-6 lg:text-2xl lg:leading-6">{name_2}</p>
      </div>
    </>
  )
}