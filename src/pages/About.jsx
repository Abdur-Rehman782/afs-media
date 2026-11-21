
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className="bg-[#0b0b0d] text-white min-h-screen">

      {/* Introduction */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28">

        <p className="text-orange-500 uppercase tracking-[0.3em] text-xs">
          Who We Are
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-6 max-w-5xl leading-tight">
          More than editing.
          <span className="text-orange-500"> It's storytelling.</span>
        </h1>

        <p className="text-gray-400 text-lg max-w-2xl mt-10 leading-9">
          AFS MEDIA is a creative video editing brand focused on
          transforming raw footage into compelling visual experiences.

          We believe great content is not just about how it looks,
          but how effectively it communicates a story.
        </p>

      </section>

      {/* Philosophy */}
      <section className="bg-[#111114] px-6 lg:px-10 py-24">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">

          <div>
            <p className="text-orange-500 uppercase tracking-[0.3em] text-xs">
              Our Philosophy
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mt-6 leading-tight">
              Every frame has a purpose.
            </h2>
          </div>

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-bold">Creativity</h3>
              <p className="text-gray-400 mt-3 leading-7">
                We approach every project with fresh ideas and a
                focus on visual storytelling.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Precision</h3>
              <p className="text-gray-400 mt-3 leading-7">
                We pay attention to pacing, detail, sound and
                presentation to create polished content.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold">Consistency</h3>
              <p className="text-gray-400 mt-3 leading-7">
                We aim to maintain a consistent creative standard
                throughout every project.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28 text-center">

        <h2 className="text-4xl md:text-6xl font-bold">
          Let's bring your vision
          <span className="text-orange-500"> to life.</span>
        </h2>

        <Link to="/contact" className="inline-block mt-10 bg-orange-500 text-black px-8 py-4 font-semibold hover:bg-orange-600 transition">
          Get In Touch ↗
        </Link>

      </section>

    </div>
  )
}

export default About
