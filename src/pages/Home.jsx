
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="bg-[#0b0b0d] text-white">

      {/* Hero */}
      <section className="min-h-[85vh] flex items-center px-6 lg:px-10">
        <div className="max-w-7xl mx-auto w-full py-24">

          <p className="text-pink-500 uppercase tracking-[0.3em] text-xs mb-8">
            Creative Production PHUDU
          </p>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] max-w-5xl">
            We turn ideas into
            <span className="text-orange-500"> powerful </span>
            visual stories.
          </h1>

          <p className="text-gray-400 text-lg max-w-xl mt-8 leading-8">
            AFS MEDIA helps brands, creators and businesses stand out
            through professional video editing and creative content
            production.
          </p>

          <div className="flex flex-wrap gap-4 mt-10">
            <Link to="/work" className="bg-orange-500 text-black px-8 py-4 font-semibold hover:bg-orange-600 transition">
              Explore Our Work ↗
            </Link>

            <Link to="/contact" className="border border-white/20 px-8 py-4 hover:border-orange-500 transition">
              Let's Talk
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-24 border-t border-white/10 pt-10">
            <div>
              <h3 className="text-3xl font-bold">Creative</h3>
              <p className="text-gray-500 text-sm mt-2">Visual Storytelling</p>
            </div>

            <div>
              <h3 className="text-3xl font-bold">Quality</h3>
              <p className="text-gray-500 text-sm mt-2">Professional Editing</p>
            </div>

            <div className="hidden md:block">
              <h3 className="text-3xl font-bold">Impact</h3>
              <p className="text-gray-500 text-sm mt-2">Content That Connects</p>
            </div>
          </div>

        </div>
      </section>

      {/* Services Preview */}
      <section className="px-6 lg:px-10 py-24 bg-[#111114]">
        <div className="max-w-7xl mx-auto">

          <p className="text-orange-500 text-xs tracking-[0.3em] uppercase">
            What We Do
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mt-5">
            Creativity meets precision.
          </h2>

          <div className="grid md:grid-cols-3 gap-6 mt-14">
            {[
              ['01', 'Short-Form Editing', 'Engaging reels, shorts and social media videos.'],
              ['02', 'Long-Form Editing', 'Professional YouTube videos and storytelling.'],
              ['03', 'Podcast Editing', 'Polished podcast episodes and video clips.']
            ].map(([number, title, desc]) => (
              <div key={number} className="border border-white/10 p-8 hover:border-orange-500/50 transition">
                <span className="text-orange-500">{number}</span>
                <h3 className="text-xl font-bold mt-8">{title}</h3>
                <p className="text-gray-400 text-sm mt-4 leading-7">{desc}</p>
              </div>
            ))}
          </div>

          <Link to="/services" className="inline-block mt-10 text-orange-500 hover:text-white transition">
            Discover all services ↗
          </Link>

        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-28 text-center">
        <p className="text-orange-500 text-xs tracking-[0.3em] uppercase">
          Have a project in mind?
        </p>

        <h2 className="text-4xl md:text-6xl font-bold mt-6">
          Let's create something
          <span className="text-orange-500"> remarkable.</span>
        </h2>

        <Link to="/contact" className="inline-block mt-10 bg-orange-500 text-black px-8 py-4 font-semibold hover:bg-orange-600 transition">
          Start a Project ↗
        </Link>
      </section>

    </div>
  )
}

export default Home
