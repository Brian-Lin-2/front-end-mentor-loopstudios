export default function Info() {
  return (
    <div className="flex flex-col items-center lg:flex-row lg:items-end lg:p-40">
      <img className="w-11/12 mt-20 mb-12 lg:hidden" src="/images/mobile/image-interactive.jpg" alt="vr"></img>
      <img className="hidden lg:block" src="/images/desktop/image-interactive.jpg" alt="vr"></img>

      <div className="text-center mx-10 mb-28 lg:text-left lg:m-0 lg:absolute lg:bg-white lg:right-28 lg:pl-20 lg:pt-20 lg:w-5/12">
        <h1 className="font-josefin-sans text-3xl mb-6 tracking-wide lg:text-5xl">THE LEADER IN INTERACTIVE VR</h1>
        <p className="font-alata text-dark-gray">
          Founded in 2011, Loopstudios has been producing world-class virtual reality 
          projects for some of the best companies around the globe. Our award-winning 
          creations have transformed businesses through digital experiences that bind 
          to their brand.
        </p>
      </div>

    </div>
  )
}