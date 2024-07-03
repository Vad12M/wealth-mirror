import { useEffect, useState } from "react";
import styles from './join-waitlist-block.module.scss';

export const Firefly = () => {
  const [x, setX] = useState(Math.random());
  const [delay, setDelay] = useState(Math.random() * 4);

  useEffect(() => {
    const interval = setInterval(() => {
      setX(Math.random());
      setDelay(Math.random() * 4);
    }, delay * 1000 + 4000);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div
      className={styles.firefly}
      style={{
        left: `${Math.random() * 100}%`,
        '--random-x': x,
        '--animation-delay': `${delay}s`,
      } as React.CSSProperties}
    ></div>
  );
};
