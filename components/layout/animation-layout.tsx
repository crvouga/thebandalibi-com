import { motion } from "framer-motion";

export const PAGE_VARIANTS = {
  initial: {
    opacity: 0,
  },
  out: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
};

export const AnimationLayout = (props: React.PropsWithChildren<{}>) => {
  const { children } = props;

  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={PAGE_VARIANTS}
    >
      {children}
    </motion.div>
  );
};
