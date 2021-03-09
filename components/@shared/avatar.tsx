import MuiAvatar, { AvatarProps } from "@material-ui/core/Avatar";
import Image from "next/image";

export const Avatar = ({ src, children, ...props }: AvatarProps) => {
  return (
    <MuiAvatar {...props}>
      {src && <Image layout="fill" objectFit="cover" src={src} />}
      {children}
    </MuiAvatar>
  );
};
