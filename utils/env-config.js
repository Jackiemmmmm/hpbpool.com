import getConfig from 'next/config';
const { publicRuntimeConfig } = getConfig();

export const Authorization = publicRuntimeConfig.AUTHORIZATION;
export const Domain = publicRuntimeConfig.DOMAIN;
export const EndPoint = publicRuntimeConfig.ENDPOINT;
