import { useState } from 'react';

const Hero = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Handle video loaded event
  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  return (
    <div className="overflow-hidden relative h-screen">
      {/* Video Background with Image Preload */}
      <div className="absolute inset-0 w-full h-full">
        {/* Placeholder Image (visible until video loads) */}
        <div 
          className={`absolute inset-0 w-full h-full bg-cover bg-center transition-opacity duration-700 ${videoLoaded ? 'opacity-0' : 'opacity-100'}`}
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80")`,
            zIndex: 1
          }}
        ></div>
        
        <video
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={handleVideoLoaded}
          className="object-cover absolute w-full h-full"
        >
          <source
            src="/hero-bg.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>
      
      {/* Content */}
      <div className="flex relative z-10 justify-center items-center px-4 h-full text-center"> 
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 [text-shadow:_2px_2px_10px_rgb(0_0_0_/_90%)]">
            Creating Unforgettable Music Experiences
          </h1>
          <p className="text-xl md:text-2xl text-white mb-8 [text-shadow:_1px_1px_5px_rgb(0_0_0_/_90%)]">
            Premier event organizers bringing you the best in live music, concerts, and entertainment
          </p>
          <div className="space-x-4">
            <button className="px-8 py-3 text-lg font-semibold text-white bg-purple-600 rounded-full shadow-lg transition duration-300 hover:bg-purple-700 hover:shadow-purple-500/30">
              Upcoming Events
            </button>
            <button className="px-8 py-3 text-lg font-semibold text-white bg-transparent rounded-full border-2 border-white shadow-lg transition duration-300 hover:bg-white hover:text-black">
              Book Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;