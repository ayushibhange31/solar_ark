import React from 'react'
import solarPanel1 from '../../../assets/images/solar-panel1.jpg';
import solarPanel2 from '../../../assets/images/solar-panel2.jpeg';
import solarPanel3 from '../../../assets/images/solar-panel3.jpeg';
import solarPanel4 from '../../../assets/images/solar-panel4.jpg';
import { FaCheckCircle } from 'react-icons/fa';


const About = () => {
  return (
    <>
      <div className='relative h-40 sm:h-28  lg:bg-gradient-to-b lg:from-black lg:to-white mobile-header'>
      </div>
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 px-4 sm:px-6 lg:px-12 py-8 sm:py-12 bg-white text-gray-800 mobile-section">
        {/* Left Column: Images Section */}
        <div className="relative flex justify-center lg:w-2/3 w-full image-section">
          {/* Top Image */}
          <div className="relative z-11 w-60 sm:w-72 lg:w-96 h-36  lg:h-60 t-img rounded-lg overflow-hidden shadow-lg -mr-8 lg:mr-0 sm:right-25 lg:right-32 top-image">
            <img src={solarPanel1} alt="Solar Panel 1" className=" lg:h-full" />
          </div>

          {/* Bottom Image */}
          <div className="absolute  b-img top-16 sm:top-20 lg:top-40  left-12 sm:left-20 lg:left-36 w-64 sm:w-72 lg:w-80 h-36 sm:h-44 lg:h-48 border-4 sm:border-8 border-white rounded-lg overflow-hidden bottom-image">
            <img src={solarPanel2} alt="Solar Panel 2" className="object-cover w-full h-full rounded-lg" />
          </div>
        </div>

        {/* Right Column: Text Section */}
        <div className="lg:w-1/3 w-full text-center lg:text-left space-y-4 sm:space-y-6 px-4 sm:px-0">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
            Solar Ark's <span className="text-orange-600">Mission</span> and <span className="text-orange-600">Vision</span> for a Sustainable India
          </h1>

          <div className="space-y-4 sm:space-y-6">
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                Solar Ark's mission extends beyond projects. Our efforts revolve around nurturing awareness about sustainable living practices, inspiring individuals to make eco-conscious choices.
              </p>
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-semibold text-gray-900">Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                Our vision is to lead the charge towards a renewable energy revolution, empowering communities across India to harness the abundant power of the sun and other sustainable resources. We see a nation where clean energy is not just a choice, but a way of life ingrained in the fabric of society.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-8 sm:py-12 lg:py-20 bg-white space-y-8 lg:space-y-0 lg:space-x-8">
        {/* Text Content */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
            Who Are <span className="text-orange-500">We?</span>
          </h2>
          <p className="text-gray-600 mb-6">
            At SolarArk, we are more than just a solar company; we are pioneers in the renewable energy sector. Our team is composed of experienced engineers, dedicated technicians, and visionary leaders who are passionate about making a positive impact on the environment. We believe in the power of solar energy to not only reduce carbon footprints but also to create a more sustainable and resilient world for future generations.
          </p>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mb-8">
            <div className="flex items-center space-x-2 justify-center lg:justify-start">
              <FaCheckCircle className="text-orange-500" />
              <span>Solar Inverter Setup</span>
            </div>
            <div className="flex items-center space-x-2 justify-center lg:justify-start">
              <FaCheckCircle className="text-orange-500" />
              <span>Battery Storage Solutions</span>
            </div>
            <div className="flex items-center space-x-2 justify-center lg:justify-start">
              <FaCheckCircle className="text-orange-500" />
              <span>Solar Material Financing</span>
            </div>
            <div className="flex items-center space-x-2 justify-center lg:justify-start">
              <FaCheckCircle className="text-orange-500" />
              <span>24 X 7 Call & Chat Support</span>
            </div>
          </div>
          <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition duration-300">
            Know More
          </button>
        </div>

        {/* Images */}
        <div className="relative flex justify-center lg:w-1/2 w-full lg:pl-16 mobile-section">
          {/* Top Image */}
          <div className="relative z-10 w-52 sm:w-60 lg:w-80 h-32 sm:h-40 lg:h-64 right-8 sm:right-16 lg:right-32 rounded-lg overflow-hidden shadow-lg top-image3">
            <img src={solarPanel4} alt="Solar Panel 1" className=" lg:h-full" />
          </div>

          {/* Bottom Image */}
          <div className="absolute z-20 top-12 sm:top-16 lg:top-32 left-8 sm:left-16 lg:left-56 w-56 sm:w-64 lg:w-72 h-36 sm:h-44 lg:h-52 border-4 sm:border-8 border-white rounded-lg overflow-hidden bottom-image4">
            <img src={solarPanel3} alt="Solar Panel 2" className="object-cover w-full h-full rounded-lg" />
          </div>
        </div>
      </div>


    </>
  )
}

export default About