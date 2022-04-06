import React from 'react';
import NextImage from 'next/image';
import Box from '@mui/material/Box';
import { SxProps, Theme } from '@mui/material/styles';

interface Props {
  src: string;
  imageProps?: {
    width?: string | number;
    height?: string | number;
    layout?: 'fill' | 'fixed' | 'responsive' | 'intrinsic';
    // All other props
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [x: string]: any;
  };
  style?: SxProps<Theme>;
  // All other props
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [x: string]: any;
}

const Image = ({ src, imageProps = {}, style = {}, ...rest }: Props): JSX.Element => {
  return (
    <Box
      className={'image'}
      sx={{
        '&.image > span': {
          height: '100% !important',
          width: '100% !important',
        },
        ...style,
      }}
      {...rest}
    >
      <NextImage
        src={src}
        layout={'responsive'}
        width={'100%'}
        height={'100%'}
        {...imageProps}
      />
    </Box>
  );
};

export default Image;
