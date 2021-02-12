import Typography from "@material-ui/core/Typography";
import { PageLayout } from "../components/layout";
import { Meta } from "../components/meta";
import { GetStaticProps } from "next";
import { datastore } from "../lib/datastore";
import { IPhoto } from "../lib/contracts";
import Image from "next/image";
import { Box } from "@material-ui/core";

type IPhotoProps = {
  photos: IPhoto[];
};

export const getStaticProps: GetStaticProps<IPhotoProps> = async () => {
  return {
    props: {
      photos: await datastore.photo.getAll(),
    },
  };
};

const Photos = (props: IPhotoProps) => {
  const { photos } = props;
  return (
    <PageLayout>
      <Meta title="Photos | Alibi" />
      <Typography variant="h1" color="initial">
        Photos
      </Typography>
      {photos.map((photo) => (
        <Box
          key={photo.imageUrl}
          width="100px"
          height="100px"
          position="relative"
        >
          <Image alt="alibi photo" src={photo.imageUrl} layout="fill" />
        </Box>
      ))}
    </PageLayout>
  );
};

export default Photos;
