import React, { Suspense, lazy, useState, useEffect } from 'react';


const LazyInterface = lazy(() => import('./components/Interface'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 700);
    }, 20000); // Your loading duration logic

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          className={`fixed inset-0 bg-white flex flex-col items-center justify-center z-50 transition-opacity duration-700 ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="w-16 h-16 border-8 border-t-blue-500 border-gray-300 rounded-full animate-spin mb-6" />
          <h1 className="text-xl font-semibold text-gray-700 typewriter">Please wait for 40 seconds more or less for the interface to appear...</h1>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="text-center">
              <div className="animate-pulse text-[60px]">Loading...</div>
            </div>
          }
        >
          <LazyInterface />
        </Suspense>
      )}
    </>
  );
}

export default App;
