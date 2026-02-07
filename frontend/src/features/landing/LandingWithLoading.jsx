import { useEffect, useState } from 'react';
import LoadingPage from './Loading';
import Landing from './Landing';

const LandingWithLoading = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }

  return <Landing />;
};

export default LandingWithLoading;
