import { throttle as _throttle } from "throttle-debounce";

export const throttle = <T>(
  { wait, noTrailing = false }: { wait: number; noTrailing?: boolean },
  f: (x: T) => void
) => {
  return _throttle(wait, noTrailing, f);
};
