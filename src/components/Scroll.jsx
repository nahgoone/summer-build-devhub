import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Scroll() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Remove '#' to get the actual id
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [hash]);

  return null;
}

export default Scroll;