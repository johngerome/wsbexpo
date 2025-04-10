import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover"
        >
          <source
            src="/hero-bg.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4"> 
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]">
            Creating Unforgettable Music Experiences
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 [text-shadow:_1px_1px_5px_rgb(0_0_0_/_90%)]">
            Premier event organizers bringing you the best in live music, concerts, and entertainment
          </p>
          <div className="space-x-4">
            <button className="bg-purple-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-purple-700 transition duration-300 shadow-lg hover:shadow-purple-500/30">
              Upcoming Events
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-black transition duration-300 shadow-lg">
              Book Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;