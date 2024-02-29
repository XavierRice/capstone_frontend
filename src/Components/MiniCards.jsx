import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const MiniCards = () => {
    return (
        <Card sx={{ maxWidth: 305, height: 150, borderRadius: 5 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="80"
            image="https://images.unsplash.com/photo-1502657877623-f66bf489d236"
            alt="green iguana"
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quaerat deserunt repellat ad eligendi quisquam..
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
};

export default MiniCards;