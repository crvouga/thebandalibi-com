import { HorizontalScroll as Component } from "./horizontal-scroll";
import { useHorizontalScrollController } from "./use-horizontal-scroll-controller";

export type IHorizontalScrollProps = React.PropsWithChildren<{}>;

export const HorizontalScroll = (props: IHorizontalScrollProps) => {
  const controller = useHorizontalScrollController();

  return <Component controller={controller} {...props} />;
};
