import Menu from './Menu';

export default function Header() {
  return (
    <div className="bg-hero-mobile bg-contain bg-no-repeat pb-60">
      <div className="flex justify-between items-center px-10 pt-12 pb-40">
        <img className="w-32" src="/images/logo.svg" alt="loopstudios"/>
        <Menu />
      </div>

      <h2 className="text-white border-2 mx-8 px-7 py-5 text-4xl font-josefin-sans tracking-wide">
        IMMERSIVE EXPERIENCES THAT DELIVER
      </h2>
    </div>
  )
}