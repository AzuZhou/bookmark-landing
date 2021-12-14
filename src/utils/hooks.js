import { useState, useEffect, useCallback } from 'react';

const useBurger = (initialState = false) => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(initialState);
  const handleBurger = useCallback(() => setIsBurgerOpen((isBurgerOpen) => !isBurgerOpen), []);

  useEffect(() => {
    document.body.style.overflow = isBurgerOpen ? 'hidden' : 'auto';
  }, [isBurgerOpen]);

  return [isBurgerOpen, handleBurger];
};

export { useBurger };
