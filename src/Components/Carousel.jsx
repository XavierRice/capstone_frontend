import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';
import { CardActionArea } from '@mui/material'


function Carousel() {

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

  //  function handlePicClick(){
  //   console.log("I will navigate")

  //  }

  return (
    <Box
      sx={{      //sx prop is a shortcut for defining custom styles that has access to the theme.
        display: 'flex',
        justifyContent: "center",
        alignItems: "center", // Center items vertically in the container
        gap: 0.5,
        py: 1,
        overflowX: 'auto',// Enable horizontal scrolling
        margin: 'auto', // Center the container horizontally
        width: "100%",
        maxWidth: "100%",
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
        // Media query for larger screens (monitors)
        '@media (min-width: 600px)': {
          width: "100%", // Adjust the width for larger screens
        },
      }}
    >
      {data.map((item, index) => (
        <CardActionArea key={index}>
          <Card
            orientation="horizontal"
            size="md" // Set to medium size
            sx={{
              position: 'relative',
              overflow: 'hidden', // Ensure text doesn't overflow
              padding: "0",
              width: '100%', // Ensure it takes the available space
              minWidth: 40, // Adjusted minimum width for responsiveness 
              // Adjusted card width for larger screens
              '@media (min-width: 124px)': {
                minWidth: 280, // Adjust the minimum width for larger screens
              },
            }}

          >
            <Box sx={{ position: 'relative', width: '100%' }}>
              <AspectRatio ratio="1"  >
                <img
                  srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.src}?h=120&fit=crop&auto=format`}
                  alt={item.title}
                  sx={{
                    width: '100%', // Ensure the image fills its container
                    display: 'block', // Ensure it's block-level element
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
                  backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better readability
                  color: '#D5E673', // Text color
                  padding: '4px 8px', // Adjust padding as needed
                 
                }}>
                {item.title}
              </Typography>
            </Box>
          </Card>
        </CardActionArea>
      ))}
    </Box>
  );
}

export default Carousel;

/* minWidth: 90, // Adjusted minimum width for responsiveness 
              // Adjusted card width for larger screens
              '@media (min-width: 124px)': {
                minWidth: 480, // Adjust the minimum width for larger screens
              },*/
