import styles from './join-waitlist-block.module.scss';
import { Firefly } from "@/components/Firefly";

export const FireflyLayout = () => {
  const fireflies = Array.from({ length: 5 });
  return (
    <>
      <div className={`${styles.fireflyContainer} ${styles.left}`}>
        {fireflies.map((_, index) => (
          <Firefly key={index} direction={'right'}/>
        ))}
      </div>
      <div className={`${styles.fireflyContainer} ${styles.right}`}>
        {fireflies.map((_, index) => (
          <Firefly key={index} direction={'left'}/>
        ))}
      </div>
    </>
  );
};
