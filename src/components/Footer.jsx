
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0d] text-white border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-black text-xl">
                A
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-[0.18em]">
                  AFS<span className="text-orange-500">.</span>MEDIA
                </h2>

                <p className="text-[9px] tracking-[0.3em] text-gray-400">
                  CREATIVE PRODUCTION
                </p>
              </div>
            </Link>

            <p className="text-gray-400 text-sm leading-7 max-w-sm mt-6">
              We create compelling visual experiences through
              professional video editing and creative production.
              Helping brands turn ideas into impactful content.
            </p>

            <div className="flex gap-4 mt-7">

              <a href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-black transition">
                IG
              </a>

              <a href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-black transition">
                IN
              </a>

              <a href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-black transition">
                YT
              </a>

            </div>

          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-sm text-gray-400">

              <Link to="/" className="hover:text-orange-500 transition">Home</Link>
              <Link to="/services" className="hover:text-orange-500 transition">Services</Link>
              <Link to="/work" className="hover:text-orange-500 transition">Our Work</Link>
              <Link to="/about" className="hover:text-orange-500 transition">About Us</Link>
              <Link to="/contact" className="hover:text-orange-500 transition">Contact</Link>

            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">
              Our Services
            </h3>

            <div className="flex flex-col gap-4 text-sm text-gray-400">

              <p className="hover:text-orange-500 transition cursor-default">Short-Form Video Editing</p>
              <p className="hover:text-orange-500 transition cursor-default">Long-Form Video Editing</p>
              <p className="hover:text-orange-500 transition cursor-default">Podcast Editing</p>
              <p className="hover:text-orange-500 transition cursor-default">Social Media Content</p>
              <p className="hover:text-orange-500 transition cursor-default">Creative Production</p>

            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-500 text-xs">
            © {new Date().getFullYear()} AFS MEDIA. All rights reserved.
          </p>

          <p className="text-gray-500 text-xs">
            Crafted with creativity. Driven by vision.
          </p>

        </div>

      </div>

    </footer>
  )
}

export default Footer
