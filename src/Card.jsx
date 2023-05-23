export default function Card({ name_1, name_2, image }) {
  const style = 'w-3/4 h-26 text-white bg-cover bg-no-repeat mb-5 ' + image;

  return (
    <>
      <div className={style}>
        <p className="w-5/12 font-josefin-sans text-xl border-white relative top-12 left-4 leading-5">{name_1}</p>
        <p className="w-5/12 font-josefin-sans text-xl border-white relative top-12 left-4 leading-5">{name_2}</p>
      </div>
    </>
  )
}