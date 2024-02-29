import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const MiniCards = () => {
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
           
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, quaerat deserunt repellat ad eligendi quisquam? Neque, ad sequi commodi quos quis vero accusamus qui rerum. Quibusdam temporibus id inventore. Ratione!
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    );
};

export default MiniCards;