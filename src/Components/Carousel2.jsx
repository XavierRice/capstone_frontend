import React from "react";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { CardActionArea } from '@mui/material';

function Carousel2() {
  const data = [
    {
        src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
        title: 'Night1',
  
      },
      {
        src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
        title: 'Lake1',
      }, {
        src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
        title: 'Night 2 ',
  
      },
      {
        src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
        title: 'Lake 2 ',
      }, {
        src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
        title: 'Night 3 ',
  
      },
      {
        src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
        title: 'Lake 3',
      }, {
        src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
        title: 'Night 4',
  
      },
     
  ];

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: "center",
        alignItems: "center", // Center items vertically in the container
        gap: 2, // Adjust gap between cards
        py: 1,
        overflowX: 'auto',
        margin: 'auto', // Center the container horizontally
        width: '100%', // Use the full width for small screens
        maxWidth: '33vw', // Maximum width on larger screens
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
        '@media (min-width: 600px)': {
          // Adjust for larger screens
          maxWidth: '33vw', // Take up 1/3 of the screen
        },
      }}
    >
      {data.map((item, index) => (
        <CardActionArea key={index}>
          <Card
            orientation="horizontal"
            size="md"
            sx={{
              minWidth: 'calc(50% - 16px)', // Half of the container's width minus the gap
              '@media (min-width: 600px)': {
                minWidth: 'calc(50% - 16px)', // Adjust based on the actual gap you want
              },
            }}
          >
            <Box sx={{ position: 'relative', width: '100%' }}>
              <AspectRatio ratio="1">
                <img
                  srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.src}?h=120&fit=crop&auto=format`}
                  alt={item.title}
                  style={{
                    width: '100%',
                    display: 'block',
                  }}
                />
              </AspectRatio>
              <Typography
                level="title-sm"
                component="div"
                sx={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  color: '#D5E673',
                  padding: '4px 8px',
                }}
              >
                {item.title}
              </Typography>
            </Box>
          </Card>
        </CardActionArea>
      ))}
    </Box>
  );
}

export default Carousel2;
