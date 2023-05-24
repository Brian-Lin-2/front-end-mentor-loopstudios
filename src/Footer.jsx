export default function Footer() {
  return (
    <div className="flex flex-col items-center bg-black text-white text-15px lg:flex-row lg:justify-between border lg:py-12 lg:px-44">
      <div> 
        <img className="w-32 mt-14 lg:m-0 lg:mb-6" src="/images/logo.svg" alt="loopstudios"/>

        <div className="flex flex-col gap-4 text-center my-10 lg:flex-row lg:gap-8 lg:m-0">
          <p>About</p>
          <p>Careers</p>
          <p>Events</p>
          <p>Products</p>
          <p>Support</p>
        </div>
      </div>

      <div>
        <div className="flex gap-4 mt-4 justify-center lg:m-0 lg:mb-6 lg:justify-end">
          <img src="/images/icon-facebook.svg" />
          <img src="/images/icon-twitter.svg" />
          <img src="/images/icon-pinterest.svg" />
          <img src="/images/icon-instagram.svg" />
        </div>

        <footer className="text-dark-gray mt-4 mb-16 lg:m-0">© 2021 Loopstudios. All rights reserved.</footer>
      </div>
    </div>
  )
}