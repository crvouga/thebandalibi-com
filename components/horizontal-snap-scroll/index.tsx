import { HorizontalSnapScroll as Component } from "./horizontal-snap-scroll";
import { useHorizontalSnapScrollController } from "./use-horizontal-snap-scroll-controller";

export type IHorizontalSnapScrollProps = React.PropsWithChildren<{}>;

export const HorizontalSnapScroll = (props: IHorizontalSnapScrollProps) => {
  const controller = useHorizontalSnapScrollController();

  return <Component controller={controller} {...props} />;
};
