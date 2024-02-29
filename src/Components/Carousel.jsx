import React, { useState, useEffect } from "react";

import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Card from '@mui/joy/Card';



function Carousel() {

  const data = [
    {
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
      title: 'Night ',

    },
    {
      src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
      title: 'Lake',
    }, {
      src: 'https://images.unsplash.com/photo-1502657877623-f66bf489d236',
      title: 'Night ',

    },
    {
      src: 'https://images.unsplash.com/photo-1527549993586-dff825b37782',
      title: 'Lake ',
    },

  ];

  return (
    <Box
      sx={{      //sx prop is a shortcut for defining custom styles that has access to the theme.
        display: 'flex',
        gap: 0.5,
        overflow: 'auto',
        width: 343,
        scrollSnapType: 'x mandatory',
        '& > *': {
          scrollSnapAlign: 'center',
        },
        '::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {data.map((item) => (
        <Card orientation="horizontal"
          size="lg"
          key={item.title}
          sx={{
            position: 'relative',
            overflow: 'hidden', // Ensure text doesn't overflow
            padding: "0"
          }}
        >
          <Box sx={{ position: 'relative', width: '100%' }}>
            <AspectRatio ratio="1" sx={{ minWidth: 90 }} >
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
                borderRadius: '0 4px', // Optional: Add border radius to the text box
              }}>
              {item.title}
            </Typography>
          </Box>

        </Card>
      ))}
    </Box>

  )
}

export default Carousel;


