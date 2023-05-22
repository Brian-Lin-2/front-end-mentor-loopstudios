export default function Footer() {
  return (
    <div>
      <img className="bg-blue-500" src="/images/logo.svg" alt="loopstudios"/>

      <div>
        <p>About</p>
        <p>Careers</p>
        <p>Events</p>
        <p>Products</p>
        <p>Support</p>
      </div>

      <div className="bg-blue-500">
        <img src="/images/icon-facebook.svg" />
        <img src="/images/icon-instagram.svg" />
        <img src="/images/icon-pinterest.svg" />
        <img src="/images/icon-twitter.svg" />
      </div>

      <footer>© 2021 Loopstudios. All rights reserved.</footer>
    </div>
  )
}