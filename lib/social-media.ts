import levenshtein from "fast-levenshtein";
import fs from "fs";
import { minimumBy } from "./minimum";

const SOCIAL_MEDIA_IMAGE_ROOT = "public/social-media/icons";

export const socialMediaNameToSocialMediaImagePath = (
  socialMediaName: string
): string => {
  const fileNames = fs.readdirSync(SOCIAL_MEDIA_IMAGE_ROOT);

  const closestFileName = minimumBy((fileName) => {
    return levenshtein.get(fileName, socialMediaName);
  }, fileNames);

  return closestFileName;
};
