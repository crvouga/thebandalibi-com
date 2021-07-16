import { editDistance, minimumBy } from "@utility";
import { IPlatformLink } from "./interface";

export const toClosestPlatform = (
  targetName: string,
  platformLinks: IPlatformLink[]
) => {
  const closest = minimumBy(
    (platformLink) => editDistance(targetName, platformLink.platform.name),
    platformLinks
  );

  return closest;
};
