import { RefObject, useEffect } from 'react';

type Event = MouseEvent | TouchEvent;

const useOnClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>[],
  handler: (event: Event) => void,
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      const elements = ref.map(el => el.current);
      for(let i = 0; i < elements.length; i++) {
        if(elements[i]?.contains(event.target as Node)){
          return
        }
      }
      handler(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
