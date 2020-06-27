import React, { useState, useEffect } from 'react';

/**
 * Custom debounce function
 * @param {string} value - input value 
 * @param {number} delay - delay in milliseconds
 * @returns {string}
 */
export default function useDebounce(value = '', delay = 200): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(
    () => {
      const handler = setTimeout(() => setDebouncedValue(value), delay);
      return () => clearTimeout(handler);
    },
    [delay, value],
  );  

  return debouncedValue;
}
