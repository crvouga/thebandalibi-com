import fs from "fs";
import { editDistance, minimumBy } from "./utility";

const SOCIAL_MEDIA_IMAGE_ROOT = "public/social-media/icons";

export const socialMediaNameToImagePath = (socialMediaName: string): string => {
  try {
    const fileNames = fs.readdirSync(SOCIAL_MEDIA_IMAGE_ROOT);

    const closestFileName = minimumBy(
      (fileName) => editDistance(fileName, socialMediaName),
      fileNames
    );

    return `/social-media/icons/${closestFileName}`;
  } catch (error) {
    console.error(error.toString());
    return "";
  }
};
