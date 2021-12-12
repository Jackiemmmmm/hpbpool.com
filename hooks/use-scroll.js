import { useEffect, useRef, useState } from 'react';

export function currentScrollTop() {
  if (process.browser) {
    return window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
  }
}

export function windowHeight() {
  if (process.browser) {
    return (
      window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    );
  }
}

function useScroll(canHideDom = false) {
  const ref = useRef(null);
  const [showDom, setShowDom] = useState(false);
  useEffect(() => {
    const scrollListener = () => {
      const browserShowDomOffset = windowHeight() * 0.85;
      const currentScrollToTop = ref.current?.offsetTop - currentScrollTop();
      if (currentScrollToTop < browserShowDomOffset && !showDom) {
        setShowDom(true);
      } else if (showDom && currentScrollToTop > browserShowDomOffset && canHideDom) {
        setShowDom(false);
      }
    };
    window?.addEventListener('scroll', scrollListener);

    return () => window?.removeEventListener('scroll', scrollListener);
  }, [canHideDom, showDom]);
  return { ref, isShow: showDom };
}

export default useScroll;
