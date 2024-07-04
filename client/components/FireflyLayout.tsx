import styles from './join-waitlist-block.module.scss';
import { Firefly } from "@/components/Firefly";

export const FireflyLayout = () => {
  const fireflies = Array.from({ length: 3 });
  return (
    <>
      <div className={`${styles.fireflyContainer} ${styles.left} md:block hidden`}>
        {fireflies.map((_, index) => (
          <Firefly key={index} direction={'right'}/>
        ))}
      </div>
      <div className={`${styles.fireflyContainer} ${styles.right} md:block hidden`}>
        {fireflies.map((_, index) => (
          <Firefly key={index} direction={'left'}/>
        ))}
      </div>
    </>
  );
};
