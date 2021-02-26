import React from "react";
import { IPlatform } from "../../../lib/contracts";
import { Footer } from "../../organisms/footer";
import { motion } from "framer-motion";

const fadeIn = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const PageLayout = (
  props: React.PropsWithChildren<{ platforms: IPlatform[] }>
) => {
  const { children, platforms } = props;
  return (
    <motion.div initial="initial" animate="in" exit="out" variants={fadeIn}>
      {children}
      <Footer platforms={platforms} />
    </motion.div>
  );
};
