import React, {useState, useEffect} from 'react'


const StripeBuy = ({buyButtonId}) => {

const stripePublishKey= import.meta.env.VITE_STRIPE_PUBLISHABLE

    return (
        <stripe-buy-button
          buy-button-id={buyButtonId}
          publishable-key={stripePublishKey}
        >
        </stripe-buy-button>
      );
};

export default StripeBuy;