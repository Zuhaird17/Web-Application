import { useEffect, useState } from "react";
import Interface from "./components/Interface";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
  const timeout = setTimeout(() => {
    setFadeOut(true); // Start fade-out
    setTimeout(() => setIsLoading(false), 700); // Wait for fade animation duration before removing
  }, 20000);

  return () => clearTimeout(timeout);
}, []);

  return (
    <>
      {isLoading ? (
        <div
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center z-50 transition-opacity duration-700 ${
            fadeOut ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-16 h-16 border-8 border-t-blue-500 border-gray-300 rounded-full animate-spin mb-6 scale-0 animate-bounce-in" />
          <p className="text-xl font-semibold text-gray-700 typewriter">Please wait...</p>
        </div>
      ) : (
        <div className="animate-fade-in">
          <Interface />
        </div>
      )}
    </>
  );
}

export default App;
