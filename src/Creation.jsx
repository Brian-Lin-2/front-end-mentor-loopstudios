export default function Creation({ name, image }) {
  const style = ' ' + image;

  return (
    <div className={style} >{name}</div>
  )
}