import { throttle as _throttle } from "throttle-debounce";

export const throttle = <T, U>(
  { wait, noTrailing = false }: { wait: number; noTrailing?: boolean },
  f: (x: T) => U
) => {
  return _throttle(wait, noTrailing, f);
};
