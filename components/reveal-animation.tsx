import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type IRevealProps = React.PropsWithChildren<{
  delay?: number;
}>;

const variants = {
  initial: {
    scale: 0.5,
    opacity: 0,
  },
  enter: {
    scale: 1,
    opacity: 1,
  },
  exit: {
    scale: 0.5,
    opacity: 0,
  },
};

export const Reveal = (props: IRevealProps) => {
  const { delay, children } = props;

  const { ref, inView } = useInView();

  const [viewed, setViewed] = useState(false);

  useEffect(() => {
    if (inView) {
      setViewed(true);
    }
  }, [inView]);

  return (
    <motion.div
      ref={ref}
      initial="initial"
      exit="exit"
      animate={viewed ? "enter" : undefined}
      variants={variants}
      transition={{
        delay,
      }}
    >
      {children}
    </motion.div>
  );
};
