import Menu from './Menu';

export default function Header() {
  return (
    <div>
      <div>
        <img className="bg-blue-500" src="/images/logo.svg" alt="loopstudios"/>
        <Menu />
      </div>

      <h2 className="bg-hero">
        IMMERSIVE EXPERIENCES THAT DELIVER
      </h2>
    </div>
  )
}