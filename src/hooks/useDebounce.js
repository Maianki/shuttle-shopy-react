import { useState, useEffect } from "react";

export function useDebounce(searchedValue, delay) {
  const [debouncedValue, setDebouncedValue] = useState(searchedValue);

  useEffect(() => {
    let timerId = setTimeout(() => setDebouncedValue(searchedValue), delay);
    return () => clearTimeout(timerId);
  }, [searchedValue, delay]);

  return debouncedValue;
}
