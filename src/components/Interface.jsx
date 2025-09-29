import { useState, useEffect } from 'react';

const Preloader = () => {
  return (
    <div className="flex justify-center items-center absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 z-50">
      <div className="w-16 h-16 border-8 border-t-8 border-gray-200 rounded-full border-t-blue-500 animate-spin"></div>
    </div>
  );
};

const Interface = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const image = new Image();
    image.src = "/Shopping-App.svg";
    image.onload = () => setIsLoading(false); // Set loading state to false when image loads
  }, []);

  return (
    <div className="container mx-auto px-4 max-h-screen overflow-auto relative">
      {isLoading && <Preloader />}
      <img
        src="/Shopping-App.svg"
        alt="Interface"
        className="w-full h-auto max-w-[2560px] opacity-0 transition-opacity duration-500"
        onLoad={() => setIsLoading(false)} // Ensures the preloader disappears after the image loads
        style={{ opacity: isLoading ? 0 : 1 }}
        loading="lazy"
      />
    </div>
  );
};

export default Interface;
