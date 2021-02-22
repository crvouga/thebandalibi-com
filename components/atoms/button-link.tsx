import Button, { ButtonProps } from "@material-ui/core/Button";
import Link from "next/link";

export const ButtonLink = ({
  href,
  ...props
}: { href: string } & ButtonProps) => {
  return (
    <Link href={href}>
      <Button size="large" {...props} />
    </Link>
  );
};
