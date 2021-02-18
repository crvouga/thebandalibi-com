export type IController = {
  ref: React.MutableRefObject<HTMLDivElement | null>;
  scrollLeft: () => void;
  scrollRight: () => void;
  canScrollLeft: boolean;
  canScrollRight: boolean;
};
