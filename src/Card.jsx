export default function Card({ name, image }) {
  const style = 'w-3/4 h-28 text-white bg-contain bg-no-repeat mb-5 ' + image;

  return (
    <>
      <div className={style}>
        <p className="w-5/12 font-josefin-sans text-xl border-white relative top-12 left-4 leading-5">{name}</p>
      </div>
    </>
  )
}