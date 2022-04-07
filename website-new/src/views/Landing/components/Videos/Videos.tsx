import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';

type IVideo = {
  title: string;
  youtubeUrl: string;
  thumbnail: string;
};

const Videos = ({ videos }: { videos: IVideo[] }): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'secondary'}
          align={'center'}
        >
          Video
        </Typography>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          The latest videos
        </Typography>
        {/* <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Here's some of our music videos
        </Typography> */}
        <Box display="flex" justifyContent={'center'} marginTop={2}>
          <Button variant="contained" color="primary" size="large">
            View all
          </Button>
        </Box>
      </Box>
      <Grid container spacing={4} justifyContent="center">
        {videos.slice(0, 5).map((item, i) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={i}
            data-aos={'fade-up'}
            data-aos-delay={i * 100}
            data-aos-offset={100}
            data-aos-duration={600}
          >
            <Box display={'block'} width={1} height={1}>
              <Card>
                <Box
                  sx={{
                    paddingTop: `${(9 / 16) * 100}%`,
                    width: '100%',
                    height: 0,
                    position: 'relative',
                  }}
                >
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    }}
                  >
                    <LazyLoadImage
                      width="100%"
                      height="100%"
                      effect="blur"
                      style={{ objectFit: 'cover' }}
                      src={item.thumbnail}
                    />
                  </Box>
                </Box>
                <CardContent>
                  <Typography
                    variant={'h6'}
                    align={'left'}
                    noWrap
                    sx={{ fontWeight: 700 }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Videos;
