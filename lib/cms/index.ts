import { sanityClient } from "../sanity-client";
import { SanityCMS } from "./cms.sanity";

export const cms = SanityCMS(sanityClient);
