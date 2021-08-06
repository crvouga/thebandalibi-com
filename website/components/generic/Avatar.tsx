import MuiAvatar, { AvatarProps } from "@material-ui/core/Avatar";
import Image from "next/image";

export const Avatar = ({
  src,
  alt,
  children,
  ...props
}: AvatarProps & { alt: string }) => {
  return (
    <MuiAvatar {...props}>
      {typeof src === "string" && (
        <Image alt={alt} layout="fill" objectFit="cover" src={src} />
      )}
      {children}
    </MuiAvatar>
  );
};
