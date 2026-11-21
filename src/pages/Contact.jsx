
import { useState } from 'react'

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const subject = encodeURIComponent('New Project Inquiry - AFS MEDIA')

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Service: ${formData.service}\n\n` +
      `Project Details:\n${formData.message}`
    )

    window.location.href =
      `mailto:YOUR_EMAIL@example.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="bg-[#0b0b0d] text-white min-h-screen">

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-28">

        <p className="text-orange-500 uppercase tracking-[0.3em] text-xs">
          Get In Touch
        </p>

        <h1 className="text-5xl md:text-7xl font-bold mt-6 max-w-4xl">
          Have a project?
          <span className="text-orange-500"> Let's talk.</span>
        </h1>

        <p className="text-gray-400 mt-8 max-w-xl leading-8">
          Tell us about your project, your goals and the kind of
          content you want to create. We'd love to hear from you.
        </p>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Contact Information */}
          <div className="space-y-10">

            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest">
                Email
              </p>
              <p className="text-xl mt-3">
                YOUR_EMAIL@example.com
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest">
                Agency
              </p>
              <p className="text-xl mt-3">
                AFS MEDIA
              </p>
            </div>

            <div>
              <p className="text-gray-500 text-xs uppercase tracking-widest">
                Project Inquiries
              </p>
              <p className="text-gray-300 mt-3 leading-7">
                For collaborations, video editing projects and
                creative partnerships, reach out to us.
              </p>
            </div>

          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="block text-sm mb-3">Your Name</label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full bg-[#17171b] border border-white/10 px-5 py-4 outline-none focus:border-orange-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-3">Email Address</label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-[#17171b] border border-white/10 px-5 py-4 outline-none focus:border-orange-500 transition"
              />
            </div>

            <div>
              <label className="block text-sm mb-3">Service Required</label>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-[#17171b] border border-white/10 px-5 py-4 outline-none focus:border-orange-500 transition"
              >
                <option value="">Select a service</option>
                <option value="Short-Form Editing">Short-Form Editing</option>
                <option value="Long-Form Editing">Long-Form Editing</option>
                <option value="Podcast Editing">Podcast Editing</option>
                <option value="Social Media Content">Social Media Content</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm mb-3">Project Details</label>
              <textarea
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="w-full bg-[#17171b] border border-white/10 px-5 py-4 outline-none focus:border-orange-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-black font-semibold py-4 hover:bg-orange-600 transition"
            >
              Send Inquiry ↗
            </button>

          </form>

        </div>

      </section>

    </div>
  )
}

export default Contact
