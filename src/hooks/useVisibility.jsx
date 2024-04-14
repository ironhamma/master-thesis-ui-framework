import { useEffect, useRef, useState } from "react";

function useVisibility({ threshold, root, rootMargin }) {
  const [entry, setEntry] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        setEntry(entries[0]);
      },
      {
        threshold: threshold || 0,
        root: root || null,
        rootMargin: rootMargin || "0%",
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, root, rootMargin]);

  return [ref, entry];
}

export default useVisibility;
