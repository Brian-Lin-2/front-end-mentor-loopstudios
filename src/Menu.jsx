export default function Menu() {
  return (
    <a>
      <img className="w-5 lg:hidden" src="/images/icon-hamburger.svg" alt="" />
      <div className="hidden lg:flex lg:text-white lg:gap-6 lg:text-15px">
        <div className="flex flex-col items-center">
          <p className="hover:cursor-pointer">About</p>
          <div className="border-t-2 w-1/3 mt-1"></div>
        </div>

        <div className="flex flex-col items-center">
          <p className="hover:cursor-pointer">Careers</p>
          <div className="border-t-2 w-1/3 mt-1 hidden"></div>
        </div>

        <div className="flex flex-col items-center">
          <p className="hover:cursor-pointer">Events</p>
          <div className="border-t-2 w-1/3 mt-1 hidden"></div>
        </div>

        <div className="flex flex-col items-center">
          <p className="hover:cursor-pointer">Products</p>
          <div className="border-t-2 w-1/3 mt-1 hidden"></div>
        </div>

        <div className="flex flex-col items-center">
          <p className="hover:cursor-pointer">Support</p>
          <div className="border-t-2 w-1/3 mt-1 hidden"></div>
        </div>
      </div>
    </a>
  )
}