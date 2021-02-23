import { useTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { motion } from "framer-motion";
import Link from "next/link";

type ILogoProps = {
  className?: string;
};

export const Logo = (props: ILogoProps) => {
  const theme = useTheme();
  return (
    <motion.div whileHover={{ scale: 0.95 }} whileTap={{ scale: 0.9 }}>
      <Link href="/">
        <Typography
          style={{ letterSpacing: theme.spacing(1), cursor: "pointer" }}
          variant="h5"
          color="initial"
          {...props}
        >
          ALIBI
        </Typography>
      </Link>
    </motion.div>
  );
};
