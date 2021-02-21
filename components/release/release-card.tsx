import Card from "@material-ui/core/Card";
import Image from "next/image";
import { IRelease } from "../../lib/contracts";
import { AspectRatio } from "../aspect-ratio";

export const ReleaseCard = ({ release }: { release: IRelease }) => {
  return (
    <Card>
      <AspectRatio ratio={[1, 1]}>
        <Image layout="fill" src={release.artwork} alt={release.artwork} />
      </AspectRatio>
    </Card>
  );
};
