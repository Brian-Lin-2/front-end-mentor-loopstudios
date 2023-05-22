import Menu from './Menu';

export default function Header() {
  return (
    <div className="bg-hero bg-contain bg-no-repeat pb-60">
      <div className="flex justify-between items-center px-10 pt-12 pb-40">
        <img className="w-32" src="/images/logo.svg" alt="loopstudios"/>
        <Menu />
      </div>

      <h2 className="text-white border-2 mx-8 px-8 py-6 text-4xl font-josefin-sans">
        IMMERSIVE EXPERIENCES THAT DELIVER
      </h2>
    </div>
  )
}