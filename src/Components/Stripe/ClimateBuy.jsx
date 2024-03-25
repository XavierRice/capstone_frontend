import React from 'react';

const ClimateBuy = () => {

    const stripePublishKey= import.meta.env.VITE_STRIPE_PUBLISHABLE
    const climateBuyButton = import.meta.env.VITE_CLIMATE_EVENT

    return (
        <stripe-buy-button
        buy-button-id={climateBuyButton}
        publishable-key={stripePublishKey}
      >
      </stripe-buy-button>
    );
};

export default ClimateBuy;