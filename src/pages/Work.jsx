
import { Link } from 'react-router-dom'

const Work = () => {

  const projects = [
    {
      number: '01',
      title: 'Short-Form Content',
      category: 'REELS / SHORTS',
      description: 'Engaging short-form video editing.'
    },
    {
      number: '02',
      title: 'YouTube Production',
      category: 'LONG-FORM',
      description: 'Long-form storytelling and editing.'
    },
    {
      number: '03',
      title: 'Podcast Highlights',
      category: 'PODCAST',
      description: 'Turning conversations into compelling content.'
    },
    {
      number: '04',
      title: 'Brand Content',
      category: 'SOCIAL MEDIA',
      description: 'Visual content for digital brands.'
    }
  ]

  return (
    <div className="bg-[#0b0b0d] text-white min-h-screen">

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28">

        <p className="text-orange-500 uppercase tracking-[0.3em] text-xs">
          Selected Projects
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-6">
          Work that speaks
          <span className="text-orange-500"> for itself.</span>
        </h1>

        <p className="text-gray-400 max-w-xl mt-8 leading-8">
          Explore our creative direction and editing capabilities.
          Every project is an opportunity to tell a better story.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {projects.map((project) => (
            <div key={project.number} className="group">

              {/* Thumbnail Placeholder */}
              <div className="aspect-video bg-[#17171b] border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition">

                <span className="text-5xl font-bold text-white/10">
                  {project.number}
                </span>

              </div>

              <div className="flex justify-between items-center mt-6">
                <div>
                  <p className="text-orange-500 text-xs tracking-widest">
                    {project.category}
                  </p>

                  <h2 className="text-2xl font-bold mt-2 group-hover:text-orange-500 transition">
                    {project.title}
                  </h2>

                  <p className="text-gray-400 text-sm mt-2">
                    {project.description}
                  </p>
                </div>

                <span className="text-orange-500 text-2xl">↗</span>
              </div>

            </div>
          ))}

        </div>

        <div className="text-center mt-24">
          <h2 className="text-3xl md:text-4xl font-bold">
            Want your project featured here?
          </h2>

          <Link to="/contact" className="inline-block mt-8 bg-orange-500 text-black px-8 py-4 font-semibold hover:bg-orange-600 transition">
            Work With Us ↗
          </Link>
        </div>

      </section>

    </div>
  )
}

export default Work
