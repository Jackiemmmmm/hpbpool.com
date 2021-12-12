import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(() => import('./image'), { ssr: false });

export default DynamicComponentWithNoSSR;
