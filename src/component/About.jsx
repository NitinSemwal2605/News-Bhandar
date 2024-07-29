import React, { useState } from 'react';
import emailjs from 'emailjs-com'; // Import emailjs

const About = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    
   emailjs.sendForm('service_fwyiwpp', 'template_ebjdelb', e.target, 'GAehD-Q0GufBmdjwy') 
    .then((result) => {
      console.log(result.text);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, (error) => {
      console.error(error.text);
      setStatus('Failed to send message.');
    });
  };

  return (
    <div>
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-8">
              <h3 className="fs-5 mb-2 text-secondary text-uppercase" style={{ color: "#1B1F3B" }}>
                About
              </h3>
              <h2 className="display-5 mb-4">
                Our journey began with a dream of redefining how the world perceives news.
              </h2>
              <button
                type="button"
                className="btn btn-lg mb-3 mb-md-4 mb-xl-5"
                style={{ backgroundColor: "#1B1F3B", color: "white" }}
              >
                Discover More
              </button>
            </div>
          </div>
        </div>
        <div className="container overflow-hidden">
          <div className="row gy-4 gy-lg-0">
            <div className="col-12 col-lg-6">
              <article>
                <div className="card border-0">
                  <img
                    className="card-img-top img-fluid m-0"
                    loading="lazy"
                    src="https://images.pexels.com/photos/3030823/pexels-photo-3030823.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Our Vision"
                  />
                  <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#!">
                          Our Vision
                        </a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-secondary mb-3">
                      At NewsBhandar, our vision is to transform how news is consumed and shared. We aim to provide our readers with the most relevant, accurate, and engaging news stories from around the globe. In a world where information is abundant but often fragmented, we strive to offer a seamless and cohesive news experience.
                    </p>
                    <p className="card-text entry-summary text-secondary mb-3">
                      We believe in the power of informed communities. By delivering news that matters, we aspire to foster a well-informed public that can make thoughtful decisions and engage in meaningful discussions. Our commitment to journalistic integrity and innovation drives us to continuously enhance our platform and the way we deliver news.
                    </p>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-12 col-lg-6">
              <article>
                <div className="card border-0">
                  <img
                    className="card-img-top img-fluid m-0"
                    loading="lazy"
                    src="https://images.pexels.com/photos/265642/pexels-photo-265642.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Our Approach"
                  />
                  <div className="card-body border bg-white p-4">
                    <div className="entry-header mb-3">
                      <h2 className="card-title entry-title h4 mb-0">
                        <a className="link-dark text-decoration-none" href="#!">
                          Our Approach
                        </a>
                      </h2>
                    </div>
                    <p className="card-text entry-summary text-secondary mb-3">
                      At NewsBhandar, we leverage cutting-edge technology and trusted sources to bring you the latest news. Our approach is rooted in using the best tools available, including APIs from Inshorts, to ensure that our news feed is always current and comprehensive. We carefully curate and verify each story to maintain the highest standards of accuracy and reliability.
                    </p>
                    <p className="card-text entry-summary text-secondary mb-3">
                      Our team of dedicated journalists and editors work around the clock to cover a wide range of topics, from local happenings to global events. By integrating advanced algorithms and human expertise, we can deliver a personalized news experience that caters to your interests and keeps you informed on the issues that matter most.
                    </p>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-3 py-md-5 py-xl-8">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h3 className="fs-5 mb-2 text-secondary text-uppercase" style={{ color: "#1B1F3B" }}>
                Contact Us
              </h3>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-lg" style={{ backgroundColor: "#1B1F3B", color: "white" }}>
                  Send Message
                </button>
                {status && <p className="mt-3">{status}</p>}
              </form>
            </div>

            {/* Google Map Section */}
            <div className="col-12 col-md-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.7699478048036!2d78.16422201519415!3d30.1181442818348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39035abf001050ef%3A0x82c1d3e8d3f95336!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1681283870216!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Google Map of Haridwar"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
