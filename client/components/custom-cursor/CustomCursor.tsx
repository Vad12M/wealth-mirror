import { useIsomorphicLayoutEffect, motion, useMotionValue, useTransform, Variants, animate } from 'framer-motion';
import { PointerEvent, useEffect, useState } from 'react';
import styles from './CustomCursor.module.css';
import useInnerWidth from "@/hooks/useInnerWidth";
import { useAppSelector } from "@/store";
import { CursorState } from "@/store/reducers/customCursor.reducer";

const clickVariants: Variants = {
  pressed: {
    width: [90, 20],
    height: [90, 20],
  },
  default: {
    width: 60,
    height: 60
  },
  hover: {
    width: [60, 60],
    height: [60, 60],
  }
}

const dotVariants: Variants = {
  pressed: {
    scale: 1
  },
  default: {
    scale: 1
  },
  hover: {
    scale: 2.5
  }
}

const hoverVariants: Variants = {
  pressed: {
    opacity: 0
  },
  default: {
    opacity: [0, 0]
  },
  hover: {
    opacity: [0, 1]
  }
}

const CustomCursor = () => {
  const isMobile = useInnerWidth() < 1024;
  const opacity = useMotionValue<0 | 1>(0);
  const mouseTop = useMotionValue<number>(0);
  const mouseLeft = useMotionValue<number>(0);
  const mouseDelayedTop = useMotionValue<number>(0);
  const mouseDelayedLeft = useMotionValue<number>(0);

  const dotTop = useTransform(mouseTop, t => `${t - 3.5}px`);
  const dotLeft = useTransform(mouseLeft, l => `${l - 3.5}px`);
  const outlineTop = useTransform(mouseDelayedTop, t => `${t}px`);
  const outlineLeft = useTransform(mouseDelayedLeft, l => `${l}px`);
  const cursorLeft = useTransform(mouseLeft, l => `${l + 4}px`);
  const cursorTop = useTransform(mouseTop, t => `${t + 13}px`);


  const cursorState = useAppSelector((state) => state.customCursor.value);
  const [variant, setVariant] = useState<string>('default');
  useEffect(() => setVariant(cursorState === CursorState.active ? 'hover' : 'default'), [cursorState]);

  useIsomorphicLayoutEffect(() => {
    const onMouseMove = (e: MouseEvent | PointerEvent) => {
      opacity.set(1);
      mouseTop.set(e.clientY);
      mouseLeft.set(e.clientX);
      requestAnimationFrame(() => {
        animate(mouseDelayedTop, e.clientY, { ease: 'linear', duration: 0.2 });
        animate(mouseDelayedLeft, e.clientX, { ease: 'linear', duration: 0.2 });
      });
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseenter', () => opacity.set(1));
    document.addEventListener('mouseleave', () => opacity.set(0));
    document.addEventListener('mousedown', () => setVariant('pressed'));
    document.addEventListener('mouseup', () => setVariant('default'));
    document.addEventListener('pointermove', onMouseMove);
  }, []);

  if (isMobile) {
    return null;
  }

  return (
    <>
      <motion.div
        initial="default"
        animate={variant}
        variants={clickVariants}
        style={{ left: outlineLeft, top: outlineTop, opacity }}
        className={styles.cursorDotOutline}
      />
      <motion.div
        initial="default"
        animate={variant}
        variants={dotVariants}
        style={{ left: dotLeft, top: dotTop, opacity }}
        className={styles.cursorDot}
      />
      <motion.div
        initial="default"
        animate={variant}
        variants={hoverVariants}
        style={{
          left: cursorLeft,
          top: cursorTop,
          backgroundImage: `url('/hover-cursor.svg')`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
      }}
        className={styles.cursorHover}
      />

    </>
  );
};

export default CustomCursor;
