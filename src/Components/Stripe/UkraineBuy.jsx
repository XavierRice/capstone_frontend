import React from 'react';

const UkraineBuy = () => {

    const stripePublishKey= import.meta.env.VITE_STRIPE_PUBLISHABLE
    const ukraineButton = import.meta.env.VITE_UKRAINE_EVENT
    
    return (
        <stripe-buy-button
        buy-button-id={ukraineButton}
        publishable-key={stripePublishKey}
      >
      </stripe-buy-button>
    );
};

export default UkraineBuy;