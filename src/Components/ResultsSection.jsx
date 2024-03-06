import React from "react";
import MiniCards from "./MiniCards";
import Card from "./Card/Card"

function ResultsSection({ selectedCategory }) {
  const cards = [
    {
      title: "Title 1",
      imageSrc: "https://source.unsplash.com/random/400x300?global",
      text: "Global Issues",
      updatedAt: "2024-03-01",
    },
    {
      title: "Title 2",
      imageSrc: "https://source.unsplash.com/random/400x300?politics",
      text: "Politics",
      updatedAt: "2024-03-02",
    },
    {
      title: "Title 3",
      imageSrc: "https://source.unsplash.com/random/400x300?social",
      text: "Social Causes",
      updatedAt: "2024-03-03",
    },
  ];

  const filteredCards = selectedCategory
    ? cards.filter((card) => card.text === selectedCategory)
    : cards;
  return (
    <div className="mx-5 px-5">
      {filteredCards.map((card, index) => (
        <div key={index}>
          <Card
            key={index}
            title={card.title}
            imageSrc={card.imageSrc}
            text={card.text}
            updatedAt={card.updatedAt}
            sx={{ maxWidth: 405, borderRadius: 10 }}
          />
        </div>
      ))}
    </div>
  );
}

export default ResultsSection;
