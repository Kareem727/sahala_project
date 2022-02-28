import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { path } = useLocation();

  useEffect(() => {
    window.scrollTo(4, 4);
  }, [path]);

  return null;
}