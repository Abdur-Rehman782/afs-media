
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)

    const links = [
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/services' },
        { name: 'Our Work', href: '/work' },
        { name: 'About Us', href: '/about' },
    ]

    return (
        <nav className="w-full sticky top-0 z-50 bg-[#0b0b0d] text-white border-b border-white/10">

            <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-white text-black flex items-center justify-center font-black text-xl">
                        A
                    </div>

                    <div>
                        <h1 className="text-xl font-bold tracking-[0.18em]">
                            AFS<span className="text-orange-500">.</span>MEDIA
                        </h1>
                        <p className="text-[9px] tracking-[0.3em] text-gray-400">
                            CREATIVE PRODUCTION
                        </p>
                    </div>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className="text-sm text-gray-300 hover:text-orange-500 transition duration-300"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* Contact Button */}
                <div className="hidden md:block">
                    <Link
                        to="/contact"
                        className="bg-orange-500 hover:bg-orange-600 text-black font-semibold text-sm px-6 py-3 transition duration-300"
                    >
                        Let's Talk ↗
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-2xl text-white"
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? '✕' : '☰'}
                </button>

            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <div className="md:hidden border-t border-white/10 bg-[#0b0b0d] px-6 py-6 flex flex-col gap-6">

                    {links.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-gray-300 hover:text-orange-500 transition"
                        >
                            {link.name}
                        </Link>
                    ))}

                    <Link
                        to="/contact"
                        onClick={() => setMenuOpen(false)}
                        className="bg-orange-500 text-black font-semibold text-center py-3"
                    >
                        Let's Talk ↗
                    </Link>

                </div>
            )}

        </nav>
    )
}

export default Navbar
