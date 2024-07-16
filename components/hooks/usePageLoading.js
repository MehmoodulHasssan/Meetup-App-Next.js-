import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

export default function usePageLoading() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeStart', () => {
      setIsLoading(true);
      setIsError(false);
    });
    router.events.on('routeChangeComplete', () => {
      setIsLoading(false);
      setIsError(false);
    });
    router.events.on('routeChangeError', () => {
      setIsLoading(true);
      setIsError(true);
    });

    return () => {
      router.events.off('routeChangeComplete');
      router.events.off('routeChangeStart');
      router.events.off('routeChangeError');
    };
  }, [router]);

  return {
    isLoading,
    isError,
  };
}
