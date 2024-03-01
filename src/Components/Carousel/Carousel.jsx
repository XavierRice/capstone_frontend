import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import { CardActionArea } from "@mui/material";

function Carousel() {
  const data = [
    {
      src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
      title: "Night1",
    },
    {
      src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
      title: "Lake1",
    },
    {
      src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
      title: "Night 2 ",
    },
    {
      src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
      title: "Lake 2 ",
    },
    {
      src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
      title: "Night 3 ",
    },
    {
      src: "https://images.unsplash.com/photo-1527549993586-dff825b37782",
      title: "Lake 3",
    },
    {
      src: "https://images.unsplash.com/photo-1502657877623-f66bf489d236",
      title: "Night 4",
    },
  ];

  //  function handlePicClick(){
  //   console.log("I will navigate")

  //  }

  return (
    <Box
      sx={{
        //sx prop is a shortcut for defining custom styles that has access to the theme.
        display: "flex",
        justifyContent: "center",
        gap: 0.5,
        py: 1,
        overflowX: "auto", // Enable horizontal scrolling
        width: "100%",
        maxWidth: 640,
        margin: '0 auto', // Center the component horizontally
        '-ms-overflow-style': 'none', // Hide scrollbar on Internet Explorer
        scrollbarWidth: 'none',
        scrollSnapType: "x mandatory",
        "& > *": {
          scrollSnapAlign: "center",
        },
        "::-webkit-scrollbar": { display: "none" },
        '@media (min-width: 1024px)': {
          width: 600, // Adjust the width for larger screens
        },
      }}
    >
      {data.map((item, index) => (
        <CardActionArea key={index}>
          <Card
            orientation="horizontal"
            size="md" // Set to medium size
            sx={{
              position: "relative",
              overflow: "hidden", // Ensure text doesn't overflow
              padding: "0",
              minWidth: 90, // Adjusted minimum width for responsiveness
              '@media (min-width: 124px)': {
                minWidth: 480, // Adjust the minimum width for larger screens
              },
            }}
          >
            <Box sx={{ position: "relative", width: "100%" }}>
              <AspectRatio ratio="1">
                <img
                  srcSet={`${item.src}?h=120&fit=crop&auto=format&dpr=2 2x`}
                  src={`${item.src}?h=120&fit=crop&auto=format`}
                  alt={item.title}
                  sx={{
                    width: "100%", // Ensure the image fills its container
                    display: "block", // Ensure it's block-level element
                    maxHeight: "50vh",
                  }}
                />
              </AspectRatio>
              <Typography
                level="title-sm"
                component="div"
                sx={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background for better readability
                  color: "#D5E673", // Text color
                  padding: "4px 8px", // Adjust padding as needed
                  borderRadius: "0 4px", // Optional: Add border radius to the text box
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

export default Carousel;
