import { GetStaticPaths, GetStaticProps } from "next";
import {
  IReleaseSingleProps,
  ReleaseSingle,
} from "../../components/pages/release.single";
import { dataStore } from "../../lib/data-access";

export const getStaticPaths: GetStaticPaths = async () => {
  const releases = await dataStore.release.getAll();

  const paths = releases.map((release) => ({
    params: {
      slug: release.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IReleaseSingleProps> = async (
  context
) => {
  const slug = context?.params?.slug?.toString() ?? "";

  const release = await dataStore.release.getOne(slug);

  if (release) {
    return {
      props: {
        settings: await dataStore.settings.get(),
        release,
      },
    };
  } else {
    return {
      notFound: true,
    };
  }
};

export default ReleaseSingle;
