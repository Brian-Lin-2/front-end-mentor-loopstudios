import Menu from './Menu';

export default function Header() {
  return (
    <div className="bg-hero-mobile bg-cover bg-no-repeat pb-60 lg:h-desktop lg:bg-hero-desktop">
      <div className="flex justify-between items-center mx-10 pt-12 mb-40 lg:pt-16 lg:mx-40 lg:mb-40">
        <img className="w-32" src="/images/logo.svg" alt="loopstudios"/>
        <Menu />
      </div>

      <h2 className="text-white border-2 mx-8 px-7 py-5 text-4xl font-josefin-sans tracking-wide lg:max-w-screen-sm lg:mx-40 lg:text-7xl lg:px-10 lg:py-8">
        IMMERSIVE EXPERIENCES THAT DELIVER
      </h2>
    </div>
  )
}