import MenuItems from './MenuItems';

export default function Menu() {
  return (
    <>
      <img className="w-5 lg:hidden hover:cursor-pointer" src="/images/icon-hamburger.svg" alt="" />
      <div className="top-0 right-0 bottom-0 left-0 fixed z-10 bg-black text-white">
        <div>

        </div>
        
        <MenuItems />
      </div>
    </>
  );
}