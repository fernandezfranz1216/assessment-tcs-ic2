import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useScrollToSection = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const element = document.querySelector(`#${pathname.split('/').pop()}`);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  }, [pathname]);
};

export default useScrollToSection;