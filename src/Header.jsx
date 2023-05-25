import MenuItem from './MenuItem';
import Menu from './Menu';

export default function Header() {
  const items = ['About', 'Careers', 'Events', 'Products', "Support"];

  return (
    <div className="bg-hero-mobile bg-cover bg-no-repeat pb-60 lg:h-desktop lg:bg-hero-desktop">
      <div className="flex justify-between items-center mx-10 pt-12 mb-40 lg:pt-16 lg:mx-44 lg:mb-32">
        <a className="hover:cursor-pointer">
          <img className="w-32" src="/images/logo.svg" alt="loopstudios"/>
        </a>
        
        <Menu />

        <div className="hidden lg:flex lg:gap-6 lg:text-white lg:text-15px">
          {items.map(item => <MenuItem key={crypto.randomUUID()} item={item} />)}
        </div>
      </div>

      <h2 className="text-white border-2 mx-8 px-7 py-5 text-4xl font-josefin-sans tracking-wide lg:max-w-screen-sm lg:ml-44 lg:text-7xl lg:px-10 lg:py-8">
        IMMERSIVE EXPERIENCES THAT DELIVER
      </h2>
    </div>
  )
}