export default function Footer() {
  return (
    <div className="flex flex-col items-center bg-black text-white text-15px lg:flex-row lg:justify-between border lg:py-12 lg:px-44">
      <div> 
        <img className="w-32 mt-14 lg:m-0 lg:mb-6" src="/images/logo.svg" alt="loopstudios"/>

        <a className="flex flex-col gap-4 text-center my-10 hover:cursor-pointer lg:flex-row lg:gap-8 lg:m-0">
          <p>About</p>
          <p>Careers</p>
          <p>Events</p>
          <p>Products</p>
          <p>Support</p>
        </a>
      </div>

      <div>
        <a className="flex gap-4 mt-4 justify-center hover:cursor-pointer lg:m-0 lg:mb-6 lg:justify-end">
          <img src="/images/icon-facebook.svg" alt="" />
          <img src="/images/icon-twitter.svg" alt="" />
          <img src="/images/icon-pinterest.svg" alt="" />
          <img src="/images/icon-instagram.svg" alt="" />
        </a>

        <footer className="text-dark-gray mt-4 mb-16 lg:m-0">© 2021 Loopstudios. All rights reserved.</footer>
      </div>
    </div>
  )
}