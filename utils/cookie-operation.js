import Cookies from 'js-cookie';
import { getDomain } from 'tldjs';

const isBrowser = typeof window !== 'undefined';

let domain = '';
if (isBrowser) {
  domain = getDomain(window.location.href) || '';
}

export const domainStr = `domain=${domain};`;
export const setCookie = (cookieName, cookieValue, expiresDay) => {
  Cookies.set(cookieName, cookieValue, { path: '/', domain, expires: expiresDay });
};

export const getCookie = (cookieName) => {
  return Cookies.get(cookieName) || '';
};

export const deleteCookie = (name) => {
  Cookies.remove(name, { path: '/', domain });
};

const cookieOperation = {
  setCookie,
  getCookie,
  deleteCookie,
};

export default cookieOperation;
