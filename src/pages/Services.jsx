
import { Link } from 'react-router-dom'

const Services = () => {

  const services = [
    {
      number: '01',
      title: 'Short-Form Video Editing',
      description: 'High-retention Instagram Reels, TikToks and YouTube Shorts designed to capture attention.'
    },
    {
      number: '02',
      title: 'Long-Form Video Editing',
      description: 'Professional YouTube videos, educational content and engaging long-form storytelling.'
    },
    {
      number: '03',
      title: 'Podcast Editing',
      description: 'Clean, professional podcast production with engaging cuts, captions and visual enhancements.'
    },
    {
      number: '04',
      title: 'Social Media Content',
      description: 'Creative content tailored to your brand identity and social media presence.'
    },
    {
      number: '05',
      title: 'Content Repurposing',
      description: 'Transform long-form videos into multiple engaging short-form pieces of content.'
    },
    {
      number: '06',
      title: 'Creative Production',
      description: 'Visual storytelling and editing solutions designed around your creative vision.'
    }
  ]

  return (
    <div className="bg-[#0b0b0d] text-white min-h-screen">

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28">

        <p className="text-orange-500 uppercase tracking-[0.3em] text-xs">
          Our Expertise
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-6 max-w-4xl">
          Services built to make your content
          <span className="text-orange-500"> stand out.</span>
        </h1>

        <p className="text-gray-400 mt-8 max-w-xl leading-8">
          We provide creative editing solutions that help businesses,
          creators and brands communicate their stories effectively.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">

          {services.map((service) => (
            <div key={service.number} className="p-8 border border-white/10 hover:border-orange-500 transition duration-300 group">

              <span className="text-orange-500 text-sm">
                {service.number}
              </span>

              <h2 className="text-2xl font-bold mt-10 group-hover:text-orange-500 transition">
                {service.title}
              </h2>

              <p className="text-gray-400 mt-5 text-sm leading-7">
                {service.description}
              </p>

            </div>
          ))}

        </div>

        <div className="mt-24 border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between gap-8 items-start md:items-center">
          <h2 className="text-3xl font-bold">
            Have a project for us?
          </h2>

          <Link to="/contact" className="bg-orange-500 text-black px-8 py-4 font-semibold hover:bg-orange-600 transition">
            Discuss Your Project ↗
          </Link>
        </div>

      </section>

    </div>
  )
}

export default Services
