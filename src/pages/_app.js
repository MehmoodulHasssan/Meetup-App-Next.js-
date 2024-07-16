import '@/styles/globals.css';
import Layout from '../../components/layout/Layout';
import usePageLoading from '../../components/hooks/usePageLoading';
import LoadingBar from 'react-top-loading-bar';
import { useRef } from 'react';
export default function App({ Component, pageProps }) {
  const { isLoading, isError } = usePageLoading();
  const bar = useRef();
  isLoading ? bar.current.continuousStart() : bar.current.complete();
  return (
    <Layout>
      <LoadingBar color="rgb(255, 253, 119)" ref={bar} />
      <Component {...pageProps} />;
    </Layout>
  );
}
