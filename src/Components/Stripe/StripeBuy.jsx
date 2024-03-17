import React, {useState, useEffect} from 'react'


const StripeBuy = () => {

const stripePublishKey= import.meta.env.VITE_STRIPE_PUBLISHABLE
const buyButtonId = import.meta.env.VITE_EVENT1
    return (
        <stripe-buy-button
          buy-button-id={buyButtonId}
          publishable-key={stripePublishKey}
        >
        </stripe-buy-button>
      );
};

export default StripeBuy;