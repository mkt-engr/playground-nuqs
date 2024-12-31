import { useEffect, useRef } from "react";

export const useFocusRef = () => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    ref.current?.focus();
  }, []);

  return ref;
};
