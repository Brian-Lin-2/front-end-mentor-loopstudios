export default function Card({ name, image }) {
  const style = 'w-3/4 text-white pt-20 bg-contain bg-no-repeat ' + image;

  return (
    <div className={style}>
      <p className="w-5/12 font-josefin-sans text-xl border border-white relative bottom-12 left-4 ">{name}</p>
    </div>
  )
}