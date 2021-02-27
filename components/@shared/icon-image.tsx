import Icon, { IconProps } from "@material-ui/core/Icon";
import Image from "next/image";

export const IconImage = ({
  src,
  ...IconProps
}: IconProps & { src: string }) => {
  return (
    <Icon {...IconProps}>
      <Image width={24} height={24} src={src} />
    </Icon>
  );
};
