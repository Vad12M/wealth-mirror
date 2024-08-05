import { useEffect, useState } from "react";
import styles from './join-waitlist-block.module.scss';

export const Firefly = ({
  direction,
}: {
  direction: 'left' | 'right';
}) => {
  const [x, setX] = useState(Math.random());
  const [delay, setDelay] = useState(Math.random() * 12);
  const images = [
    '/canvas/OldCar.svg',
    '/canvas/CarOld.svg',
    '/canvas/Cash.svg',
    '/canvas/CreditCard.svg',
    '/canvas/CC1.svg',
    '/canvas/CC2.svg',
    '/canvas/DC1.svg',
    '/canvas/FOB.svg',
    '/canvas/FOB2.svg',
    '/canvas/Gold.svg',
    '/canvas/Home-1.svg',
    '/canvas/Home-2.svg',
    '/canvas/Home-3.svg',
    '/canvas/Home-4.svg',
    '/canvas/Home-5.svg',
    '/canvas/Home-6.svg',
    '/canvas/Savings.svg',
    '/canvas/Scooter.svg',
  ];
  const randomIndex = Math.floor(Math.random() * images.length);

  useEffect(() => {
    const interval = setInterval(() => {
      setX(Math.random());
      setDelay(Math.random() * 10);
    }, delay * 1000 + 10000);
    return () => clearInterval(interval);
  }, [delay]);

  return (
    <div
      className={`${styles.firefly}`}
      style={{
        left: `${Math.random() * 100}%`,
        '--random-x': x,
        '--animation-delay': `${delay}s`,
      } as React.CSSProperties}
    >
      <img
        className={`${direction === 'left' ? styles.left : styles.right} opacity-50`}
        src={images[randomIndex]} alt={'icon'}/>
    </div>
  );
};
