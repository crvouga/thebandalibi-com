import { GetStaticPaths, GetStaticProps } from "next";
import {
  IReleaseSingleProps,
  ReleaseSingle,
} from "../../components/templates/release.single";
import { store } from "../../lib/store";

export const getStaticPaths: GetStaticPaths = async () => {
  const releases = await store.release.getAll();

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

  const release = await store.release.getOne(slug);

  if (release) {
    return {
      props: {
        platforms: await store.platform.getAll(),
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
