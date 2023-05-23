export default function Menu() {
  return (
    <a>
      <img className="w-5 lg:hidden" src="/images/icon-hamburger.svg" alt="" />
      <div className="hidden lg:flex lg:text-white lg:gap-6 lg:text-15px">
        <p>About</p>
        <p>Careers</p>
        <p>Events</p>
        <p>Products</p>
        <p>Support</p>
      </div>
    </a>
  )
}