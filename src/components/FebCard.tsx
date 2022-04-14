import { Image } from '@/types/image';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

interface FebCardProps {
  className?: string;
  image?: Image;
  title?: string;
  subtitle?: string;
}

// const Div = styled('div')<{ active_route?: string }>(
//   ({ theme, active_route }) => ({
//     '&:hover': {
//       color: `${theme.palette.primary.main} !important`,
//     },
//     color: active_route === 'active' ? theme.palette.primary.main : 'inherit',
//   }),
// );

export const FebCard: React.FC<FebCardProps> = ({ image }) => {
  return (
    <Card sx={{ maxWidth: 245, mr: 2 }}>
      <CardActionArea>
        <CardMedia
          alt="green iguana"
          component="img"
          height="140"
          image={image?.src}
        />
        <CardContent>
          <Typography gutterBottom component="div" variant="h5">
            Lizard
          </Typography>
          <Typography color="text.secondary" variant="body2">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default FebCard;
