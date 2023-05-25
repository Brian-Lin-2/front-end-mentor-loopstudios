import MenuItems from './MenuItems';

export default function Menu() {
  return (
    <>
      <img className="w-5 lg:hidden hover:cursor-pointer" src="/images/icon-hamburger.svg" alt="" />
      <div className="top-0 right-0 bottom-0 left-0 fixed z-10 bg-black text-white">
        <div className="flex justify-between items-center mx-6 my-12">
          <img className="w-40" src="/images/logo.svg" alt="loopstudios"/>
          <img className="hover:mouse-pointer" src="images/icon-close.svg" />
        </div>
        
        <div className="w-5/12 flex flex-col items-start gap-6 mx-6 mt-48 text-2xl font-josefin-sans uppercase">
          <MenuItems />
        </div>
      </div>
    </>
  );
}