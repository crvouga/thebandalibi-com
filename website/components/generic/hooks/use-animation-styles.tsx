import { makeStyles } from "@material-ui/core";

export const useAnimationStyles = makeStyles(() => ({
  "@keyframes flicker": {
    "0%": {
      opacity: 1,
    },
    "50%": {
      opacity: 1 / 2,
    },
    "100%": {
      opacity: 1,
    },
  },

  "@keyframes oscillate": {
    "0%": {
      transform: `scale: 1`,
    },
    "50%": {
      transform: `scale: 0.8`,
    },
    "100%": {
      transform: `scale: 1`,
    },
  },

  flicker: {
    animation: `$flicker 1s infinite`,
  },

  oscillate: {
    animation: `$oscillate 1s infinite alternate`,
  },
}));
