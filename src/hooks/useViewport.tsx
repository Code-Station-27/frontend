import { useState, useEffect } from 'react'

export const useViewport = () => {
    const [width, setWidth] = useState(undefined);
  
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    return { width };
}