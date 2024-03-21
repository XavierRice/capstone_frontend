import { useState, useEffect } from "react";

function useScrollPosition({ element }) {
  const [scrolling, setScrolling] = useState(false);
  
  const handleOnScroll = (e) => {
    if (e.target.scrollTop > 0) {
      setScrolling(true)
    } else {
      setScrolling(false)
    }
  }

  useEffect(() => {
    // const handleScroll = () => {
    //   setScrolling(window.scrollY > 0);
    // };

    // window.addEventListener("scroll", handleScroll);

    // return () => {
    //   window.removeEventListener("scroll", handleScroll);
    // };
    if (element.current) {
      element.current.container.current.addEventListener('scroll', handleOnScroll)
    }

    return () => {
      element.current.container.current.removeEventListener("scroll", handleOnScroll);
    };
  }, [element]);

  return scrolling;
}

export default useScrollPosition;
