import { Suspense, lazy, useState, useEffect } from 'react';

const LazyInterface = lazy(() => import('./components/Interface'));

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 700); // Fade out delay
    }, 2000); // Initial delay

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {isLoading ? (
        <div
          className={`fixed inset-0 bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center justify-center z-50 transition-opacity duration-700 ${
            fadeOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="w-24 h-24 border-8 border-t-transparent border-white rounded-full spinner mb-6" />
          <h1 className="text-2xl font-bold text-white tracking-wider animate-fadeIn">Loading Your Interface...</h1>
          <p className="mt-2 text-lg font-light text-gray-100 animate-fadeIn opacity-80">
            Please wait a moment while everything gets ready.
          </p>
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="text-center">
              <div className="animate-pulse text-[60px] text-blue-500">Loading...</div>
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
