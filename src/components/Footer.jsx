import { FaDiscord, FaTwitter, FaYoutube, FaMedium } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-16 text-black">
      <div className="container mx-auto flex flex-col items-center gap-16 px-4 text-black">
        {/* Main Title */}
        <h1 className="hero-heading text-center text-7xl">ZENTR<b>Y</b></h1>

        {/* Navigation Links */}
        <div className="flex flex-col gap-16 w-full text-center md:flex-row md:justify-around">
          <div>
            <h3 className="font-general font-bold uppercase text-xl">Explore</h3>
            <ul className="mt-4 space-y-2 text-lg font-general">
              <li>Home</li>
              <li>Prologue</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h3 className="font-general font-bold uppercase text-xl">Products</h3>
            <ul className="mt-4 space-y-2 text-lg font-general">
              <li>Radiant</li>
              <li>
                <a href="#" className="hover:underline">
                  Nexus ↗
                </a>
              </li>
              <li>Zigma</li>
              <li>Azul</li>
            </ul>
          </div>
          <div>
            <h3 className="font-general font-bold uppercase text-xl">Follow Us</h3>
            <ul className="mt-4 space-y-4 text-lg font-general">
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700"
                >
                  <FaDiscord size={24} className="inline-block mr-2" />
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700"
                >
                  <FaTwitter size={24} className="inline-block mr-2" />
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700"
                >
                  <FaYoutube size={24} className="inline-block mr-2" />
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-700"
                >
                  <FaMedium size={24} className="inline-block mr-2" />
                  Medium
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-general font-bold uppercase text-xl">Resources</h3>
            <ul className="mt-4 space-y-2 text-lg font-general">
              <li>Media Kit</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom Text */}
      <div className="mt-16 text-center text-lg font-general text-black">
        <p>©2024 RafaCampos. All rights reserved</p>
        <a href="#privacy-policy" className="hover:underline">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
